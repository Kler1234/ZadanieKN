$(document).ready(function() {
   $("#tabs").tabs();
});
function load_from_site(){
    $.get('http://217.71.129.139:4003/students.php', function(data){
      students = JSON.parse(data)['response']
    });
}
let numgroup = new Array()
function data_upload(){
    let tr = document.getElementById('tr')
    for (let i = 0; i < students.length; i++){
        let group =  students[i].group
        if  (numgroup.indexOf(group) == -1){
          numgroup.push(group) 
          let th = document.createElement('th')
          let links = document.createElement('a')
          links.textContent = group
          th.appendChild(links)
          tr.appendChild(th)
          $(links).addClass(group)
          $(links).addClass("links_group")
  }
  }
}
function load_stud_info(){
  let links_group = document.querySelectorAll('.links_group')
links_group.forEach.call(links_group,function(el){
  $(el).click(function(el){
      this.classList.add('load_stud_info')
      let thead = document.getElementById('thead')
      var student_container = $('.load_stud_info').text();
      $('.remove').remove();
      for (let i = 0; i < students.length; i++){
        let group =  students[i].group
        let id =  students[i].id
        let name =  students[i].name
        let surname =  students[i].surname
        let scores = students[i].scores
        srznaj = average(students[i].scores)
        if (student_container == group){
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        td1.textContent = id
        td2.textContent = name
        td3.textContent = surname
        td4.textContent = scores
        td5.textContent = srznaj
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        thead.appendChild(tr)
        tr.classList.add('remove')
      }
    }
    $(this).removeClass('load_stud_info')
  })
})
}
  function average(nums) {
      if(Array.isArray(nums)) {
        let num = nums.reduce((a, b) => (a + b)) / nums.length;
        return num.toFixed(1);
      }
    }