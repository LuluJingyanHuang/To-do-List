const add=document.getElementById('add');
const newTask=document.getElementById('newTask');
var todo=document.getElementById('list1');
// var checkBox=document.createElement("input");
var deleteButton=document.createElement("button");
var editButton=document.createElement("button");
// checkBox.type='checkbox';
// deleteButton.innerText='Delete';
// deleteButton.className='delete';
// editButton.innerText='Edit';
// editButton.className='edit';





var list=document.getElementsByTagName('LI');
var chcked
var addTask=function(){
  var li= document.createElement('li');
  var extract=document.getElementById('newTask').value;
  li.innerHTML=`
  <div class='item'>
  <label class="container">
  <input type="checkbox" class='checkbox'>
  <span class="checkmark"></span></label>`
  +`<input class="extract" value='${extract}'></input>`
  // +`<button class='edit'>Edit</button>`
  +`<button class='delete'>Delete</button>
  </div>`;
  todo.appendChild(li);
  newTask.value='';

}


add.addEventListener('click',addTask);
newTask.addEventListener('keypress',function(e){
  if (e.key==='Enter'){
    addTask();
  }

});

$(document).on("click", ".edit" , function(e) {
            var entry=e.target.previousSibling;
            entry.setAttribute('contenteditable','true');

        });



// Experimenting with code right now
// var complete=document.getElementById('list2');
//
//

$(document).on("click", ".container" , function() {
                    var element = $(this).parent().parent();
                    $(this).remove();
                    $('#list2').append(element);

                    // Try to do if statement for when checkbox is checked
                    // Loop through list


                                // $(this).parent().slideUp(
                                //   () => {
                                //     element.remove();
                                //   }
                                // );
                            });


$(document).on("click", ".delete" , function() {
                    var element = $(this).parent().parent();
                    console.log(element);
                    $(this).parent().slideUp(
                      () => {
                        element.remove();
                      }
                    );
                });

// var checkBox=document.getElementsByClassName('checkmark');
// console.log(checkBox[0]);
//
// for(var i=0;i<checkBox.length;i+=1){
//   checkBox[i].addEventListener('click',function(){
//       var target=checkBox[i].parentNode;
//       console.log(target);
//
//   });
// }


//
// for (var i=0; i<list.length;i+=1){
//     list[i].appendChild(checkBox);
// }

//
// var addTask=function(){
//   var extract=document.getElementById('newTask').value;
//   var list= document.createTextNode(extract);
//   li.appendChild(checkBox);
//   li.appendChild(list);
//   console.log(li);
//   li.appendChild(editButton);
//   li.appendChild(deleteButton);
//   todo.appendChild(li);
//   newTask.value='';
// }

// var addTask=function(){
//   var extract=document.getElementById('newTask').value;
//   var list= document.createTextNode(extract);
//   li+=`${checkBox}`;
//   // li.appendChild(list);
//   // console.log(li);
//   // li.appendChild(editButton);
//   // li.appendChild(deleteButton);
//   todo.innerHTML=li;
//   newTask.value='';
// }
