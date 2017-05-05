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
		const COUNT = 50;
		var obj = [];
		try {  		
			 obj = JSON.parse(data.toString());
		} catch (e) {
			obj = [];
		}
		if (obj.length > COUNT) {
			obj = obj.slice(0, COUNT);
		}
		return res.send({
			status: 1,
			data: obj
		})
	});
});

/***
 * 写入数据模块
 * data/read?type=it
 * data/it.json
 **/
router.get('/write', (req, res, next) => {
	// 文件名
	var type = req.query.type || '';
	// 关键字段
	var url = req.query.url || '';
	var title = req.query.title || '';
	var img = req.query.img || '';

	if (!type || !url || !title || !img){
		return res.send({
			status: 0,
			info: '提交的字段不全'
		})
	}

	// 读取文件
	fs.readFile(PATH + type + '.json', (err, data) => {
		if (err){
			return res.send({
				status: 0,
				info: '读取数据失败'
			})
		}

		var arr = JSON.parse(data.toString());
		console.log(arr);

		var obj = {
			img: img,
			url: url,
			title: title,
			id: 1,
			time: new Date()
		}
		arr.splice(0, 0, obj);

		var newData = JSON.stringify(arr);
		// 写入文件
		fs.writeFile(PATH + type + '.json', newData, (err) => {
			if (err) {
				return res.send({
					status: 0,
					info: '写入文件失败'
				})
			}
			return res.send({
				status: 1,
				info: obj
			})
		});
	});
});

router.get('/write_config', (req, res, next) => {
	
})

module.exports = router;
