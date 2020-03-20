function kisekae(){
  //上半身の着せ替え
  var top = ["kisekae/top_1.gif","kisekae/top_2.gif","kisekae/top_3.gif"];

  //下半身の着せ替え
  var bottom = ["kisekae/bottom_1.gif","kisekae/bottom_2.gif","kisekae/bottom_3.gif"];

  //乱数
  let i_tops = Math.floor(Math.random()*3);
  let i_bottoms = Math.floor(Math.random()*3);

  //画面上に表示
  document.getElementById("tops").src = top[i_tops];
  document.getElementById("bottoms").src = bottom[i_bottoms];
}
