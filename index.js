"use strict";
//实际项目中这个内容应该分离出来，但是这里就不这样做了
let map = {
  ["beijing"]: [
    "北京大学", "清华大学", "中国人民大学", "北京师范大学"
  ],
  ["shanghai"]: [
    "复旦大学", "上海交通大学", "	同济大学", "华东师范大学"
  ],
  ["zhejiang"]: [
    "浙江大学", "中国美术学院", "浙江财经大学", "浙江工业大学"
  ]
};

function updateSchools() {
  let city = document.getElementById('city-select');
  let schoolSelect = document.getElementById('school-select');
  while (schoolSelect.firstChild) schoolSelect.removeChild(schoolSelect.firstChild);
  let els = map[city.value].forEach(school => {
    let el = document.createElement("option");
    el.innerHTML = school;
    schoolSelect.appendChild(el);
  });
  schoolSelect.childNodes = els;
}

window.onload = () => {
  updateSchools();
}