<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="/WEB-INF/mytag.tld" prefix="myTag"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="resources/js/echarts.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>后台管理</title>
<link rel="stylesheet" type="text/css"
	href="resources/layui/css/layui.css">
<!-- 响应式布局 -->
</head>
<body>
	<ul class="layui-nav">
		<li class="layui-nav-item layui-this"><a
			href="coreServlet?bizCode=1">查看新闻</a></li>
		<li class="layui-nav-item "><a onclick="add()">发布新闻</a></li>
		<li class="layui-nav-item "><a onclick="statical()">数据统计</a></li>

		<li class="layui-nav-item" style="float: right;"><a href=""><img
				src="resources/images/admin.jpg" class="layui-nav-img">${username}</a>
			<dl class="layui-nav-child">
				<dd>
					<a href="javascript:;" onclick="add()">发布新闻</a>
				</dd>
				<dd>
					<a href="javascript:;" onclick="location.href = 'login.jsp'">退了</a>
				</dd>
			</dl></li>
	</ul>



	<div id="table" style="width: 100%">
		<table class="layui-table">
			<colgroup>
				<col width="150">
				<col width="200">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th width="10%">序号</th>
					<th width="20%">标题</th>
					<!-- <th>内容</th>  -->
					<th width="10%">类型</th>
					<th width="10%">作者</th>
					<th width="10%">点击量</th>
					<th width="20%">更新时间</th>
					<th width="20%">操作</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="news" items="${newsList}" varStatus="status">
					<tr>
						<td>${status.index + 1}</td>
						<td>${news.title}</td>
						<td>${news.type}</td>
						<td>${news.author}</td>
						<td>${news.click}</td>
						<td>${myTag:formatDateTime(news.pudate)}</td>
						<td>
							<button class="layui-btn layui-btn-primary"
								onclick="edit(${news.id})">编辑</button>
							<button class="layui-btn layui-btn-primary"
								onclick="detail(${news.id})">详情</button>
							<button class="layui-btn layui-btn-danger"
								onclick="del(${news.id})">删除</button>
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>

		<div class="layui-btn-group" style="float: left;" id="pageTurnDiv">
			<input type="hidden" name="pageCount" value="${pageCount}"> <input
				type="hidden" name="pageNo" value="${pageNo}">
		</div>
	</div>



	<!-- 表单部分 -->
	<div id="newsform"
		style="position: fixed; width: 800px; height: 600px; z-index: 2; top: 5%; left: 0px; right: 0px; margin-left: auto; margin-right: auto; background-color: #fff; box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.6);"
		hidden>
		<div
			style="width: 100%; height: 40px; background-color: #009f95; line-height: 40px; font-size: 20px; color: #fff;">
			&nbsp;新增<a
				href="javascript:$('#newsform').hide(); $('form')[0].reset();"><i
				class="layui-icon"
				style="font-size: 30px; float: right; margin-right: 10px;">&#x1006;</i></a>
		</div>
		<form class="layui-form"
			action="${pageContext.request.contextPath}/coreServlet" method="post"
			style="padding-right: 30px; padding-top: 30px;">
			<input type="hidden" name="id" value="0" />
			<div class="layui-form-item">
				<label class="layui-form-label">标题</label>
				<div class="layui-input-block">
					<input type="text" name="title" required lay-verify="required"
						placeholder="请输入标题" autocomplete="off" class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">类别</label>
				<div class="layui-input-block">
					<select name="type" lay-verify="required">
						<option value=""></option>
						<option value="1">社会</option>
						<option value="2">娱乐</option>
						<option value="3">军事</option>
						<option value="4">体育</option>
						<option value="5">财经</option>
					</select>
				</div>
			</div>

			<div class="layui-form-item layui-form-text">
				<label class="layui-form-label">内容</label>
				<div class="layui-input-block">
					<textarea id="content" name="content" style="display: none;"></textarea>
				</div>
			</div>

			<div class="layui-form-item">
				<input type="hidden" name="cover" /> <label
					class="layui-form-label">封面</label>
				<button type="button" class="layui-btn" id="test1"
					style="float: left">
					<i class="layui-icon">&#xe67c;</i>上传图片
				</button>
				<span id="imgview" style="float: left"></span>
			</div>

			<div class="layui-form-item">
				<div class="layui-input-block">
					<input type="hidden" name="bizCode" value="0">
					<button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
					<button type="reset" class="layui-btn layui-btn-primary">重置</button>
				</div>
			</div>
		</form>
	</div>



	<dir id="chart" hidden>
		<div id="chart1" style="width: 1000px; margin: 0 auto; height: 400px;"></div>

		<div id="chart2" style="width: 600px; margin: 0 auto; height: 500px;"></div>


	</dir>



	<script type="text/javascript" src="resources/layui/layui.js"></script>
	<script type="text/javascript" src="resources/js/jquery-3.1.0.min.js"></script>
	<script type="text/javascript" src="resources/js/pageturn.js"></script>
	<script>
	$(function(){
		//加载分页组件
		pageTurnDiv();
		
		//编辑器部分
		layui.use('layedit', function(){
		  	var layedit = layui.layedit;
		  	//配置富文本中的上传图片，一定要在build之前
		  	layedit.set({
			  uploadImage: {
			    url: 'imageUpload' //接口url
			    ,type: 'post' //默认post
			  }
			});
		  	//创建富文本
		  	layedit.build('content',{
			  	height: 230
		  	}); 
		});
		
		//我部分
		layui.use('element', function(){
		  	var element = layui.element;
		});
		
		//图片上传部分
		layui.use('upload', function(){
			var upload = layui.upload; //得到 upload 对象
	 
			//创建一个上传组件
			upload.render({
			  elem: '#test1'
			  ,url: 'imageUpload'
			  ,done: function(res, index, upload){ //上传后的回
			  		var imgpath = res.data.src;
			  		$("input[name='cover']").val(imgpath);
			  		$("#imgview").html("<img src='"+imgpath+"' width='60px' height='38px' style='margin-left:20px;'/>");
			  } 
			});
		});
		
		
	});
	
	//关闭编辑区
	function close(){
		$("#newsform").hide();
		$("#newsform").reset();
	}
	
	//开启编辑区
	function add(){
		$("#newsform").show();
	}
	//开启统计区
	function statical(){
		
		$("#table").hide();
		$("#chart").show();

	}
	
	//删除一条记录
	function del(id){
		layer.confirm('确定删除？', {icon:3, title:'提示'}, function(index){
			location.href = "coreServlet?bizCode=3&id="+ id;
			layer.close(index);
		});
	}
	
	//编辑
	function edit(id){
		$("input[name='id']").val(id);
		$("select[name='type']").attr("disabled","true");
		$.ajax({
			url : "coreServlet?bizCode=2&id="+ id,
			method : "get",
			success: function(data){
				var result = JSON.parse(data);
				$("input[name='title']").val(result.title);
				$("select[name='type'] option").each(function(){
				    if($(this).val() == result.type){
				    }
				});
				$("input[name='content']").html(result.content);
				$("input[name='cover']").val(result.img);
				$("#newsform").show();
			}		
		});
	}
	
	//详情
	function detail(id){
		location.href = "coreServlet?bizCode=4&type=del&id="+ id;
	}
	


	
</script>


	<script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart2'));

        // 指定图表的配置项和数据
		        option = {
		
		    title: {
		        text: '新闻比例图',
		        left: 'center',
		        top: 20,
		        textStyle: {
		            color: '#000000'
		        }
		    },
		
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		
		    visualMap: {
		        show: false,
		        min: 80,
		        max: 600,
		        inRange: {
		            colorLightness: [0.5, 1]
		        }
		    },
		    series : [
		        {
		            name:'',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		            data:[
		                {value:'${newstypeList[0].count}', name:'社会'},
		                {value:'${newstypeList[1].count}', name:'娱乐'},
		                {value:'${newstypeList[2].count}', name:'军事'},
		                {value:'${newstypeList[3].count}', name:'体育'},
		                {value:'${newstypeList[4].count}', name:'财经'}
		            ].sort(function (a, b) { return a.value - b.value; }),
		            roseType: 'radius',
		            label: {
		                normal: {
		                    textStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    lineStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    },
		                    smooth: 0.2,
		                    length: 10,
		                    length2: 20
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#c23531',
		                    shadowBlur: 200,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            },
		
		            animationType: 'scale',
		            animationEasing: 'elasticOut',
		            animationDelay: function (idx) {
		                return Math.random() * 200;
		            }
		        }
		    ]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>




	<script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));

    // 指定图表的配置项和数据
option = {
title: {
    text: '点击量统计',
},
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
},
legend: {
    data: ['点击量']
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
},
yAxis: {
    type: 'category',
    data: ['${clickList[0].title}','${clickList[1].title}','${clickList[2].title}','${clickList[3].title}','${clickList[4].title}']
},
series: [
    {
        name: '2011年',
        type: 'bar',
        data: [ '${clickList[0].click}','${clickList[1].click}','${clickList[2].click}', '${clickList[3].click}','${clickList[4].click}']
    },
]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
</body>
</html>