// This is a single-line comment in C++

/* 
* This is a multi-line
* comment 
*/

// This first secction is just to set up the program
#include <iostream>
#include <typeinfo> 
using namespace std;

int main () {

  // Here are our variable declarations
  int myInt = 5;
  float myFloat = 5.65;
  bool myBool = true;
  char myChar = 'X';
  char myStr[] = "A string";


  // Then we ask it to print the output
  cout << "Data type of myInt: " << typeid(myInt).name() << endl;
  cout << "Data type of myFloat: " << typeid(myFloat).name() << endl;
  cout << "Data type of myBool: " << typeid(myBool).name() << endl;
  cout << "Data type of myChar: " << typeid(myChar).name() << endl;
  cout << "Data type of myStr: " << typeid(myStr).name() << endl;

  return 0;
}
