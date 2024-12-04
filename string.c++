#include<iostream>
using namespace std;
int main(){
    string s = "this is not";
    int left = 0;
    int right = s.size()-1;
    string ans;
    while(left<=s.size() && right>=0){
        if(s[right]=' '){
            right--;
        }
        

        ans+=s[right];
        right--;
        if(s[left]=' '){
            ans+=s[left];
        }
        left++;

    }
    cout<<ans;
    return 0;
}