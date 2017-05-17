var express = require('express');
var router = express.Router();
var fs = require('fs');
const PATH = './public/data/'

/***
 * 读取数据模块
 * data/read/it
 * data/it.json
 **/

router.get('/read/:id', (req, res, next) => {
	var type = req.params.id || '';
	fs.readFile(PATH + type + '.json', (err, data) => {
		if (err) {
			return res.send({
				status: 0,
				info: '读取文件出现异常'
			});
		}
		var obj = [];
		try {  		
			 obj = JSON.parse(data.toString());
		} catch (e) {
			obj = [];
		}
		return res.send({
			status: 200,
			data: obj
		})
	});
});

// 获取用户数量
router.get('/usernum', (req, res, next) => {
	fs.readFile(PATH + 'user.json', (err, data) => {
		if (err) {
			return res.send({
				status: 0,
				info: '读取文件出现异常'
			});
		}
		
		var obj = [];
		try {  		
			 obj = JSON.parse(data.toString());
		} catch (e) {
			obj = [];
		}
		
		return res.send({
			status: 200,
			data: obj.length
		})
	});
});

// 获取图片地址
router.get('/img/:id', (req, res, next) => {
	var filename = req.params.id || '';
  
	return res.send({
		status: 200,
		data: 'http://localhost:3000/static/images/'+filename
	});
});

/***
 * 写入数据模块
 * data/write/user
 * data/user.json
 **/
router.get('/write/user', (req, res, next) => {
	// 关键字段
	var name = req.query.name || '';
	var tel = req.query.tel || '';

	if (!name || !tel){
		return res.send({
			status: 0,
			info: '提交的字段不全'
		})
	}

	// 读取文件
	fs.readFile(PATH + 'user.json', (err, data) => {
		if (err){
			return res.send({
				status: 0,
				info: '读取数据失败'
			})
		}

		var arr = JSON.parse(data.toString());
		console.log(arr.length);

		var obj = {
			id: arr.length + 1,
			name: name,
			tel: tel,
			avatar: "http://localhost:3000/static/images/avatar.jpg"
		}
		arr.splice(arr.length, 0, obj);

		var newData = JSON.stringify(arr);
		// 写入文件
		fs.writeFile(PATH + 'user.json', newData, (err) => {
			if (err) {
				return res.send({
					status: 0,
					info: '写入文件失败'
				})
			}
			return res.send({
				status: 200,
				info: obj
			})
		});
	});
});

// 发送评论
router.get('/write/comments', (req, res, next) => {
	// 关键字段
	var name = req.query.name || '';
	var avatar = req.query.avatar || 'http://localhost:3000/static/images/avatar.jpg'
	var comment = req.query.comment || '';

	if (!name || !comment){
		return res.send({
			status: 0,
			info: '提交的字段不全'
		})
	}

	// 读取文件
	fs.readFile(PATH + 'comments.json', (err, data) => {
		if (err){
			return res.send({
				status: 0,
				info: '读取数据失败'
			})
		}

		var arr = JSON.parse(data.toString());
		console.log(arr.length);

		var obj = {
			id: arr.length + 1,
			name: name,
			avatar: avatar,
			comment: comment
		}
		arr.splice(0, 0, obj);

		var newData = JSON.stringify(arr);
		// 写入文件
		fs.writeFile(PATH + 'comments.json', newData, (err) => {
			if (err) {
				return res.send({
					status: 0,
					info: '写入文件失败'
				})
			}
			return res.send({
				status: 200,
				info: obj
			})
		});
	});
});

module.exports = router;
