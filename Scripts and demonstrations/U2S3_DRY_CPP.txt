#include <iostream>
using namespace std;

int basic_pizza() {
  cout << "  Pizza base" << endl;
  cout << "  Tomato sauce" << endl;
  cout << "  Cheese" << endl;
  cout << "  \n" << endl;

  return 0;
}

int main () {
  cout << "Ham pizza ingredients: " << endl;
  cout << "  Ham" << endl;
  basic_pizza();

  cout << "Sausage pizza ingredients: " << endl;
  cout << "  Sausage" << endl;
  basic_pizza();

  cout << "Mushroom pizza ingredients: " << endl;
  cout << "  Mushroom" << endl;
  basic_pizza();

return 0;
}

