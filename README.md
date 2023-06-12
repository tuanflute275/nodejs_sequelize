## câu lệnh npm
    npm init 
        ----->(tạo file package.json)

## cài đặt express
    npm install --save-exact express@4.17.1
        --->(cài đặt express với bản 4.17.1)

        --cách dùng
        b1: import Express from "express";
        b2:const app = express();
        và app.method(path, handle)

## cài node mon
    -- npm i nodemon
    --vào file package.json thêm câu lệnh vào scripts
     "start": "nodemon --exec babel-node src/server.js"

## cài morgan 
    -- nó giúp ta biet phuong yhuc nao minh gui di va mot so thong tin khac
    --npm i morgan

    cách dùng 
    b1: var morgan = require('morgan')
    b2:app.use(morgan('combined'))
    
## file .gitignore dùng để ẩn nội dung khi đẩy lên github --> viết tên file là dc

## VIEW ENGINE (handlebar)
    -- dùng để hiển thị ra giao diện wed
    -- npm install express-handlebars
    -- npm i ejs

    -- import path from 'path'
    

    muốn sử dụng ta cần có đoạn code sau ở file server.js
    // setting ejs
        app.set("view engine", "ejs");
        app.set('views', path.join(__dirname, 'resources/views'))

    -- nó sẽ sử dụng view engine là ejs
    -- path _dirname là để build ra từ file nào

## config viewEjs
    import express from "express";

    const configViewEngine = (app) => {
        app.use(express.static('./src/public'))
        // cấu hình view engine là ejs
        app.set("view engine", "ejs");
        app.set("views", "./src/resources/views")
    }

    export default configViewEngine;

## sass - nodejs
***install**
--npm i node-sass

**cấu hình**
vào file package.json để config

thêm câu lệnh sau vào phần script như start

 "watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css",

***chạy câu lệnh npm run watch ở terminal khác***



## cài đặt babel nó hỗ trợ các câu lệnh mới nhất ( import)
    npm install --save-exact body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6

    * tạo file .babelrc  để config babel
            {
            "presets": [
                "@babel/preset-env"
            ]
        }

## STATIC FILES
    // static file
    app.use(express.static(path.join(__dirname, 'public')))
    --public là thư mục muốn static

## tạo cổng từ file khác
* tạo file .env để lưu cổng web  (ví dụ PORT = 8080)
    * và nodeJs muốn dùng phải cài đặt dotenv
    *npm install --save-exact dotenv@10.0.0
    
    ** muốn sử dụng cần
    -- thêm require('dotenv').config();
    vào file server.js và
    --const port = process.env.PORT
    

## mô hình mvc
action --> dispatcher --> function handler
app.get('/news', (req, res) => {
    res.render('news.ejs');
});

-- app.get('/news',... )  --> đây đc gọi là routes --> viết ở file khác


*** controller ***
-- app.get('/news',handle() )  --> function handle trong đây dc gọi là controller và nó dc viết ở file khác 

-- controller tương tác với view ở chỗ nó render ra file html-css trong thư mục view

-- cum này (req, res) => {
    res.render('news.ejs');
} được viết ở file controller sẽ đúng mô hình mvc


*** module ***
-- SỬ DỤNG DATABASE VỚI NODE.JS
-- npm i --save-exact mysql2@2.3
-- npm i mysql2

-- tạo file connectDB.js 
và thêm code này rồi export ra file homeController trong thư mục controller(homecontroller sẽ import)


***connectDB export file ra homeController***
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodebasic'
});

-->export default connection;

***homeController import file vào và thêm câu lệnh trong mỗi layout muốn lấy database***
import connection from '../config/connectDB'
exports.home = function (req, res) {
    // lấy database
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    name: row.name
                })
            })
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}

***render database ra view ejs cho browser(web, chrome, firefox,...) nhìn thấy***
--- trong file index.ejs để có thể nhìn thấy ta thêm dataUser của file homecontroller vào
----bằng cách sau: <%= dataUser %>




## tạo orm với mysql
👉 1. Cài đặt các thư viện: sequlize-cli, sequelize và mysql2
npm install --save-dev sequelize-cli@6.2.0
npm install --save mysql2@2.2.5
npm install --save sequelize@6.6.2
👉 Tại thư mục root, sử dụng câu lệnh: node_modules/.bin/sequelize init
👉 3. Tạo model: 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
👉 4: Tạo migrations:
npx sequelize-cli db:migrate
----- lỗi : vào file .env thêm câu NODE_ENV=development này vào
👉5. Tạo Seeder: npx sequelize-cli seed:generate --name demo-user

-----> //dán câu lệnh config vào: npx sequelize-cli init -->thay = câu node modules ở trên r
------> khi chạy nh câu lệnh trên nó sẽ lỗi

và ta cần 1 file để config là .sequelizerc
trong file .sequelizerc cấu hình như sau
----
const path = require('path');
module.exports = {
  'config': path.resolve('./src/config', 'config.json'),
  'migrations-path': path.resolve('./src', 'migrations'),
  'models-path': path.resolve('./src', 'models'),
  'seeders-path': path.resolve('./src', 'seeders')
}
------
'models-path': path.resolve('./src', 'models'),
----> nó giúp ta tạo file models trong src
----
  'seeders-path': path.resolve('./src', 'seeders')
  seed --> giúp tạo dữ liệu fake
----
'migrations-path': path.resolve('./src', 'migrations'),
migrations -->tạo bảng với mysql qua câu lệnh ngắn gọn trên terminal
---
'config': path.resolve('./src/config', 'config.json'),
----> nói cho biết lấy database từ đâu
---
  return queryInterface.bulkInsert('User',[{
      firstName: 'john',
      lastName: 'Doe',
      email:'example@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
--> theem cau lenh nay vao phan up caur file seeders
----> giups t quay laij dc database truocws ddo

***tiep tuc chay cau lenh nay:  npx sequelize-cli db:seed:all ***
<!-- xong taoj database rtaoh seed -->
npx sequelize-cli db:seed:all


### has password ->max hoas mat khau
npm i --save bcrypt@5.0.1




