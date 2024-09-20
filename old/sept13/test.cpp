#include <stdio.h>
using namespace std;

int ans(int a, int b){
   return a * b;
}

double ans(double a, double b){
   return a * b;
}

int ans(int a, int b, int c){
   return a * b * c;
}
void main(){
   ans(10,2);
   ans(1,20,3);
   ans(10.0,25.0);
}