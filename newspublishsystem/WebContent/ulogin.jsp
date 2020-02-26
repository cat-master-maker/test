<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Date"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Free Responsive Html5 Templates">
    <meta name="author" content="">
	
    <title></title>
	
    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="resources/css/bootstrap.min.css"  type="text/css">
	
	<!-- Custom CSS -->
    <link rel="stylesheet" href="resources/css/style.css">
	
	<!-- Owl Carousel Assets -->
    <link href="resources/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="resources/owl-carousel/owl.theme.css" rel="stylesheet">
	
	<!-- Custom Fonts -->
    <link rel="stylesheet" href="resources/font-awesome-4.4.0/css/font-awesome.min.css"  type="text/css">
	
	<!-- jQuery and Modernizr-->
	<script src="resources/js/jquery-2.1.1.js"></script>
	
	<!-- Core JavaScript Files -->  	 
    <script src="resources/js/bootstrap.min.js"></script>
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>

<body class="single-page">
<header>
	<!--Top-->
	<nav id="top">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<strong>MyNews - Welcome to Us!</strong>
				</div>
				<div class="col-md-6">
					<ul class="list-inline top-link link">
						<li><a href="index.jsp"><i class="fa fa-home"></i> Home</a></li>
						<li><a href="ulogin.jsp"><i class="fa fa-comments"></i> login</a></li>
						<li><a href="reg.jsp"><i class="fa fa-question-circle"></i> register</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>
	
	
	<!-- Header -->
	
	<!-- /////////////////////////////////////////Content -->
	<div id="page-content" class="single-page container">
		<div class="gutter-7px">
			<div id="main-content" class="col-md-8 fix-right">
				<article>
					<center><div class="box-header">
						<h1 class="center">登录</h1>
					</div></center>
					<div class="box-content">
						<div id="contact_form">
							<form action="coreServlet?bizCode=10"  name="form1" id="ff" method="post" action="contact.php">
								<label>
								<span>用户名</span>
								<input type="text"  name="username" id="name" required>
								</label>
								<label>
								<span>密码</span>
								<input type="password"  name="password" id="email" required>
								</label>
							<div>
								<input type="text" name="captcha" style="width:100px" maxlength="4" required="required" placeholder="请输入验证码"/>
								<img src="captcha?v=<%=new Date().getTime() %>" id="captcha" alt="验证码" title="点击刷新验证码" onclick="change()"/>
</div>
								<br/><br/>
							<a href="reg.jsp">	<input class="sendButton" type="button" name="Submit" value="注册"></a>
								<input class="sendButton" type="submit" name="Submit" value="确定">

							</form>
						</div>
					</div>
				</article>
			</div>
			<div id="sidebar" class="col-md-4 fix-left">
				<!---- Start Widget ---->
				<div class="widget wid-follow">
					<div class="heading"><h4>Follow Us</h4></div>
					<div class="content">
						<ul class="list-inline">
							<li>
								<a href="facebook.com/">
									<div class="box-facebook">
										<img src="resources/images/qq.jpg" class="fa fa-facebook fa-2x icon" >
	
									</div>
								</a>
							</li>
							<li>
								<a href="facebook.com/">
									<div class="box-twitter">
										<img src="resources/images/weibo.jpg" class="fa fa-twitter fa-2x icon" >

									</div>
								</a>
							</li>
							<li>
								<a href="facebook.com/">
									<div class="box-google">
										<img src="resources/images/timg.jpg" class="fa fa-google-plus fa-2x icon" >

									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
		<script type="text/javascript">		
		function change(){
			document.getElementById("captcha").src="/captcha?v=" + new Date().getTime();
		}
		</script>
</body>
</html>
