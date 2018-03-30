#include <stdio.h>

main()
{
  char input[12];//11 Characters and null

  printf("Which program are you learning? ");
  fgets(input,12,stdin);
  printf("You are learning: %s",input);//For Some Reason Period on New Seen on Screen Shoot

}
