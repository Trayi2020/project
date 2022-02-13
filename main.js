var images = ["https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/3419/2018/07/11155222/family-ideal.jpg","https://previews.123rf.com/images/yupiramos/yupiramos1805/yupiramos180524924/102065467-ni%C3%B1a-ni%C3%B1a-de-car%C3%A1cter-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9pqnUIMtqgr-VUeOp_vfKQMgO9wmxQbkJGK1p8_VLa6kxv5LBqzmE14TQyCbTEISF6E&usqp=CAU" , "https://cdn3.vectorstock.com/i/1000x1000/83/92/a-smiling-mother-vector-1658392.jpg"];
           
var names = ["Family Book","Trayi Pattanayak", "Tushar Pattanayak", "Suchitra Pattanayak"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 3
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}