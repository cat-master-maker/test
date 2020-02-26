package cn.nicecoder.pojo;

public class Click {
private String title;
private int click;
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public int getClick() {
	return click;
}
public void setClick(int click) {
	this.click = click;
}
public  Click(int click, String title) {
	this.title = title;
	this.click = click;
}


}
