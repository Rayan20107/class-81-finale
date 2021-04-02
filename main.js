var student_names=[];

function submit()
{

    var display_student=[]; 

   for (let index = 1; index <=4; index++){

   var name=document.getElementById("student"+index).value;

    student_names.push(name);

    console.log(name);
   } 

   var length_of_students=student_names.length;

   console.log(length_of_students);

   for (let index = 0; index < length_of_students; index++) {  
       display_student.push(student_names[index]);
       console.log(display_student);
    
   }


   var remove_commas=display_student.join(". ");

   

 document.getElementById("display_name").innerHTML=remove_commas;
 document.getElementById("submit").style.display="none";


}

var student_name2=[];

function submit2()
{

    var display_student2=[]; 

   for (let index = 1; index <=4; index++){
   var name2=document.getElementById("s"+index).value;


    student_name2.push(name2);

    console.log(name2);
   } 

   var length_of_students2=student_name2.length;

   console.log(length_of_students2);

   for (let index = 0; index < length_of_students2; index++) {  
       display_student2.push(student_name2[index]);
       console.log(display_student2);
    
   }


   var remove_commas2=display_student2.join(". ");

 document.getElementById("display_name2").innerHTML=remove_commas2;
 document.getElementById("submit2").style.display="none";


}



