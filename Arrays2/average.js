var grades = [3, 4, , 3, , 5, 4];
var sum = 0;
var count = 0;

if (grades.length > 0){
	for (index = 0; index < grades.length; index++)
	{
		if (grades[index] !=undefined){
			sum += grades[index];
			count = count + 1;
		}
	}
document.write(sum/count);
}

else
  document.write("Empty Array");
