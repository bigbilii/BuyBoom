function confirmName(username) {
	var key = document.getElementById("username");

	if((username).length != 0) {
		reg = /^[\u4e00-\u9fa5_a-zA-Z0-9-]{1,16}$/g;
		if(!reg.test(username)) {
			key.style.border = '1.5px solid red';
			return false;
		} else {
			key.style.border = '1.5px solid green';
			return true;
		}
	} else {
		key.style.border = '1.5px solid red';
		return false;
	}

}

function confirmEmail(email) {
	var key = document.getElementById("email");

	if((email).length != 0) {
		reg = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;
		if(!reg.test(email)) {
			key.style.border = '1.5px solid red';
			return false;
		} else {
			key.style.border = '1.5px solid green';
			return true;
		}
	} else {
		key.style.border = '1.5px solid red';
		return false;
	}
}

function confirmPassword(password) {
	var key = document.getElementById("password");

	if((password).length != 0) {
		reg = /^(\w){3,20}$/;
		if(!reg.test(password)) {
			key.style.border = '1.5px solid red';
			return false;
		} else {
			key.style.border = '1.5px solid green';
			return true;
		}
	} else {
		key.style.border = '1.5px solid red';
		return false;
	}
}

function confirmConPassword(conpassword) {
	var key = document.getElementById("conpassword");
	var password = document.getElementById("password-value").value;
	if((conpassword).length != 0) {
		if(conpassword.length != password.length) {
			key.style.border = '1.5px solid red';
			return false;
		} else if(conpassword != password){
			key.style.border = '1.5px solid red';
			return false;
		}else {
			key.style.border = '1.5px solid green';
			return true;
		}
	} else {
		key.style.border = '1.5px solid red';
		return false;
	}

}

function editNmae() {
	var key = document.getElementById("username");
	key.style.border = '1px solid #333333';
}

function editEmail() {
	var key = document.getElementById("email");
	key.style.border = '1px solid #333333';
}

function editPassword() {
	var key = document.getElementById("password");
	key.style.border = '1px solid #333333';
}

function editConpassword() {
	var key = document.getElementById("conpassword");
	key.style.border = '1px solid #333333';
}

function checkLogin() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if((email).length == 0) {
		alert("账号不能为空!");
		return false;
	}
	if((password).length == 0) {
		alert("密码不能为空!");
		return false;
	}

	if(email == "abc@qq.com") {
		if(password == "123") {
			alert("登录成功!");
			return true;
		}
	}
	alert("账号密码错误，登录失败!");
	return false;
}

function checkRegister() {
	var username = document.getElementById("username-value").value;
	var email = document.getElementById("email-value").value;
	var password = document.getElementById("password-value").value;
	var conpassword = document.getElementById("conpassword-value").value;
	
	
	if(!confirmName(username) ) {
		alert("用户名格式不正确! 只允许 字母 数字 下划线 中文");
		return false;
	}
	if(!confirmEmail(email)) {
		alert("邮箱格式不正确!");
		return false;
	}
	if(!confirmPassword(password)) {
		alert("密码格式不正确! 3-20位");
		return false;
	}
	if(!confirmConPassword(conpassword)) {
		alert("两次密码输入不匹配!");
		return false;
	}
	alert("注册成功!");
}