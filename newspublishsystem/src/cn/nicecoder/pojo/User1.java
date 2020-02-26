package cn.nicecoder.pojo;
import java.util.ArrayList;

//用户类
public class User1 {
	public int id;
	public String username;
	public String password;
	public int status;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "User1 [id=" + id + ", username=" + username + ", password=" + password + ", status=" + status + "]";
	}

	
	
	
}
