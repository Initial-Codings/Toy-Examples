#include <stdio.h>

main()
{
int a,i;

i=0;
for (a=0;a<10;a++) //If Number is Odd.
    {
     if(i%2 == 0)
        {
            i++;
            printf("\"%d\"\n",i);
        }else     //If Number is Even.
            {
              i++;
              printf(" \"%d\"\n",i);
            }
    }
}
