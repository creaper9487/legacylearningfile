#include <Ultrasonic.h> //require specific library
long nowTime = millis();
bool beepFlag;
Ultrasonic usonic(12, 13);
void setup() {

pinMode(2,OUTPUT);
pinMode(3,OUTPUT);
pinMode(4,OUTPUT);
pinMode(7,OUTPUT);
beepFlag = true;
}
void lightup(char col){
  switch(col){
    case 'r' ://<5
      digitalWrite(2,HIGH);
      digitalWrite(3,LOW);
      digitalWrite(4,LOW);
      break;
    case 'g' ://5<x<10
      digitalWrite(3,HIGH);
      digitalWrite(2,LOW);
      digitalWrite(4,LOW);
      break;
    case 'b' ://>10
      digitalWrite(4,HIGH);
      digitalWrite(3,LOW);
      digitalWrite(2,LOW);
      break;
    }
  }
void beep(int a){
    digitalWrite(7,HIGH);
    delay(a);
    digitalWrite(7,LOW);
    delay(a);
  }
void beep1(int a){
    if(millis()-nowTime>a){
    digitalWrite(7,HIGH);
    beepFlag=!beepFlag;
    }
    if(millis()-nowTime>a){
    digitalWrite(7,LOW);
    beepFlag=!beepFlag;
    }
  }  
void loop() {
  if(beepFlag)nowTime = millis();beepFlag=!beepFlag;
  // put your main code here, to run repeatedly:
  int dis=usonic.read();
  if(dis<5){
    lightup('r');
    beep(50);
  }else if(dis<10){
    lightup('g');
    beep(300);
    }else{
    lightup('b');
      }
}
