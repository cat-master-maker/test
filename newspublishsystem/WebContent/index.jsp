<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="/WEB-INF/mytag.tld" prefix="myTag"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Free Responsive Html5 Templates">
<meta name="author" content="">
<title>MY NEWS</title>

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

<!-- Owl Carousel Assets -->
<link href="owl-carousel/owl.carousel.css" rel="stylesheet">
<!-- <link href="owl-carousel/owl.theme.css" rel="stylesheet"> -->

<!-- Custom CSS -->
<link rel="stylesheet" href="css/style.css">
<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet"
	media="screen">

<!-- Custom Fonts -->
<link rel="stylesheet"
	href="font-awesome-4.4.0/css/font-awesome.min.css" type="text/css">

<!-- jQuery and Modernizr-->
<script src="js/jquery-2.1.1.js"></script>

<!-- Core JavaScript Files -->
<script src="js/bootstrap.min.js"></script>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>

<body class="index-page" onload="mainpas()">
	<header> <!--Top--> <nav id="top">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<strong>MyNews - Welcome to Us!</strong>
			</div>
			<div class="col-md-6">
				<ul class="list-inline top-link link">
					<li><a href="index.jsp"><i class="fa fa-home"></i> Home</a></li>

				</ul>
			</div>
		</div>
	</div>
	</nav>

	<div id="owl-slide" class="owl-carousel">
		<c:forEach begin="0" end="4" var="i" varStatus="status">
			<c:set var="news" value="${newsList[i]}" />

			<div class="item">
				<a href="coreServlet?bizCode=4&id=${news.id}&type=${news.type}">
					<div class="zoom-container">
						<div class="zoom-caption">

							<div class="zoom-caption-inner">
								<span></span>
								<div class="date-feat">
									<i class="fa fa-clock-o"></i>${myTag:formatMD(news.pudate)}
									<!-- 		<i class="fa fa-video-camera"></i> -->

								</div>
								<h3>${news.title}</h3>
							</div>
						</div>
						<img style="width: 500px; height: 280px" src="${news.img}" />

					</div>
				</a>
			</div>
		</c:forEach>
	</div>



	</header>



	<!-- 主体部分 -->

	<!--Navigation-->
	<nav id="menu" class="navbar navbar-default" role="navigation">
	<div class="navbar-header">
		<button type="button" class="btn btn-navbar navbar-toggle"
			data-toggle="collapse" data-target=".navbar-ex1-collapse">
			<i class="fa fa-bars"></i>
		</button>
		<a class="navbar-brand" href="#">
			<div class="logo">
				<span>MYNEWS</span>
			</div>
		</a>
	</div>

	<!-- Collect the nav links, forms, and other content for toggling -->
	<div class="collapse navbar-collapse navbar-ex1-collapse">
		<ul class="nav navbar-nav">
			<li class="dropdown"><a href="coreServlet?bizCode=7"
				onclik="typeTurn(0,0)">首页</a></li>
			<li class="dropdown"><a href="#" class="dropdown-toggle"
				data-toggle="dropdown">账户 <i class="fa fa-arrow-circle-o-down"></i></a>
				<div class="dropdown-menu">
					<div class="dropdown-inner">
						<ul class="list-unstyled">
							<li><a href="ulogin.jsp">登录</a></li>
							<li><a href="reg.jsp">注册</a></li>
							<li><a href="coreServlet?bizCode=12">退出</a></li>
						</ul>
					</div>
				</div></li>

			<li class="dropdown"><a href="#" class="dropdown-toggle"
				data-toggle="dropdown">分类<i class="fa fa-arrow-circle-o-down"></i></a>
				<div class="dropdown-menu" style="margin-left: 0px;">
					<div class="dropdown-inner">

						<ul class="list-unstyled">
							<li><a onclick="typeTurn(0,0)" href="coreServlet?bizCode=7">全部</a></li>
							<li><a onclick="typeTurn(1,1)"
								href="coreServlet?bizCode=7&type=1">社会</a></li>
							<li><a onclick="typeTurn(1,2)"
								href="coreServlet?bizCode=7&type=2">娱乐</a></li>
							<li><a onclick="typeTurn(1,3)"
								href="coreServlet?bizCode=7&type=3">军事</a></li>
							<li><a onclick="typeTurn(1,4)"
								href="coreServlet?bizCode=7&type=4">体育</a></li>
							<li><a onclick="typeTurn(1,5)"
								href="coreServlet?bizCode=7&type=5">财经</a></li>
						</ul>
					</div>
				</div></li>

		</ul>
		<div class="col-sm-3 col-md-3 navbar-right">
			<form class="navbar-form" role="search"></form>
		</div>
	</div>
	<!-- /.navbar-collapse --> </nav>



	<div class="clearfix no-gutter">


		<div class="col-sm-4">
			<c:forEach var="news" items="${newsList}">
				<article class="flag"
					href="coreServlet?bizCode=4&id=${news.id}&type=${news.type}">
				<div class="entry-header">
					<!-- 标签 -->
					<div class="grid-cat">
						<a href="#">${news.type}</a>
					</div>
					<!--  -->
					<h3 class="entry-title">
						<a href="coreServlet?bizCode=4&id=${news.id}&type=${news.type}">${news.title}</a>
					</h3>
					<span><i class="fa fa-calendar"></i>${myTag:formatMD(news.pudate)}/ <i
						class="fa fa-eye"></i> ${news.click}</span>
				</div>
				<div class="post-thumbnail-wrap">
					<img src="${news.img}" />
				</div>
				<div class="entry-content">
					<p>${news.content}</p>
					<a href="coreServlet?bizCode=4&id=${news.id}&type=${news.type}">More...</a>
				</div>
				</article>
			</c:forEach>
		</div>


	</div>



	<c:import url="footer.jsp"></c:import>





	<!-- JS -->
	<script src="owl-carousel/owl.carousel.js"></script>
	<script>
		$(document)
				.ready(
						function() {
							$("#owl-slide")
									.owlCarousel(
											{
												autoPlay : 3000,
												items : 4,
												itemsDesktop : [ 1199, 4 ],
												itemsDesktopSmall : [ 979, 3 ],
												itemsTablet : [ 768, 2 ],
												itemsMobile : [ 479, 1 ],
												navigation : true,
												navigationText : [
														'<i class="fa fa-chevron-left fa-5x"></i>',
														'<i class="fa fa-chevron-right fa-5x"></i>' ],
												pagination : false
											});
						});

		function mainpas() {
			window.loaction.href = "coreServlet?bizCode=7";
		}
	</script>


	<script type="text/javascript" src="js/bootstrap-datetimepicker.js"
		charset="UTF-8"></script>
	<script type="text/javascript"
		src="js/locales/bootstrap-datetimepicker.fr.js" charset="UTF-8"></script>
	<script type="text/javascript">
		$(function() {
			//滚动分页
			var flag = 0;
			$(window)
					.scroll(
							function() {
								console.log($(window).scrollTop() + "  "
										+ $(document).height() + "  "
										+ $(window).height());
								if ($(window).scrollTop() == $(document)
										.height()
										- $(window).height()) {
									var pageCount = $("input[name='pageCount']")
											.val();
									var pageNo = $("input[name='pageNo']")
											.val();
									var keyWord = $("input[name='keyWord']")
											.val();
									var type = $("input[name='type']").val();
									if (pageNo < pageCount) {
										$
												.ajax({
													url : "coreServlet?bizCode=7",
													dataType : "json",
													data : {
														'keyword' : keyWord,
														'type' : type,
														'pageNo' : parseInt(pageNo) + 1
													},
													success : function(data) {
														var html = "";
														$
																.each(
																		data.newsList,
																		function(i,val) {
																			html += '<article class="flag" href="coreServlet?bizCode=4&id='+val.id+'&type='+val.type+'">';
																			html += '	<div class="entry-header">';
																			html += '<!-- 标签 -->';
																			html += '<div class="grid-cat">';
																			html += '	<a href="#">'+news.type+'</a>';
																			html += '</div>';
																			html += '<!--  -->';
																			html += '<h3 class="entry-title">';
																			html += '	<a href="coreServlet?bizCode=4&id='+val.id+'&type='+val.type+'">'+val.title+'</a>';
																			html += '</h3>';
																			html += '<span><i class="fa fa-calendar"></i>'+val.pudate+'<iclass="fa fa-eye"></i> '+news.click+'</span>';
																			html += '</div>';
																			html += '<div class="post-thumbnail-wrap">';
																			html += '<img src='+val.img+' />';
																			html += '</div>';
																			html += '<div class="entry-content">';
																			html += '<p>'+val.content+'</p>';
																			html += '<a href="coreServlet?bizCode=4&id='+val.id+'&type='+val.type+'">More...</a>';
																			html += '</div>';
																			html += '</article>';
																			

																		});

														$("col-sm-4").last().after(html);
														$("input[name='pageNo']").val(parseInt(pageNo) + 1);
													}
												});
									} else if (pageNo == pageCount && flag == 0) {
										flag++;
										var html = '<p style="text-align:center; color:#FF8C69; font-size:14px; margin-top:10px; margin-bottom:10px;">-没有更多了-</p>';
										$("col-sm-4").last().after(html);
									}
								}
							});
		});

		function typeTurn(opt, type) {
			if (opt == 1) {
				$("input[name='type']").val(type);
			} else {
				$("input[name='type']").val("");
			}
		}

		function showlog() {
			$(".logdiv").animate({
				height : 'toggle'
			});
		}

		function dateFormat(pdate) {
			return pdate.substring(0, 4) + "-" + pdate.substring(4, 6) + "-"
					+ pdate.substring(6, 8);
		}

		window.onload = function() {
			if ('${newsList}') {
			} else {
				location.href = "coreServlet?bizCode=7";
			}
		}

		$('.form_datetime').datetimepicker({
			//language:  'fr',
			weekStart : 1,
			todayBtn : 1,
			autoclose : 1,
			todayHighlight : 1,
			startView : 2,
			forceParse : 0,
			showMeridian : 1
		});
		$('.form_date').datetimepicker({
			language : 'fr',
			weekStart : 1,
			todayBtn : 1,
			autoclose : 1,
			todayHighlight : 1,
			startView : 2,
			minView : 2,
			forceParse : 0
		});
		$('.form_time').datetimepicker({
			language : 'fr',
			weekStart : 1,
			todayBtn : 1,
			autoclose : 1,
			todayHighlight : 1,
			startView : 1,
			minView : 0,
			maxView : 1,
			forceParse : 0
		});

		/* onload{}
		 function load()
		 {
		 location.href="coreServlet?bizCode=7";
		 } */
	</script>
</html>