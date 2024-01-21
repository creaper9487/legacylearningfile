char comm;
class mot{
  public:
    int A;
    int B;
    int state;
    int spd;
  };

mot motL;mot motR; //define MOTors(Left/Right)

void setup(){  
  Serial.begin(9600);
  motL.A=6;motL.B=7;motR.A=8;motR.B=9;// pins on each motors:6,7;8,9
  
  }

//  MoVement function

void mv(int motr,int dir ,int spd){//L=0 R=1 forward=0&HIGH,backward=1&LOW
    if(!motr){
      if(motL.state)digitalWrite(motL.A,HIGH);else digitalWrite(motL.A,LOW);
      motL.spd=spd;
      analogWrite(motL.B,motL.spd);
      }else{
      if(motR.state)digitalWrite(motR.A,HIGH);else digitalWrite(motR.A,LOW);
      motR.spd=spd;
      analogWrite(motR.B,motR.spd);
      }
    
  }


void loop(){
  comm=Serial.read();
  //change motor state according to Character typed
  switch(comm){
    case 'L':
    mv(0,0,200);
    mv(1,1,200);
    break;
    case 'R':
    mv(0,1,200);
    mv(1,0,200);
    break;
    case '1':
    mv(0,0,80);
    mv(1,0,80);
    break;
    case '2':
    mv(0,0,120);
    mv(1,0,120);
    case '3':
    mv(0,0,160);
    mv(1,0,160);
    case '4':
    mv(0,0,200);
    mv(1,0,200);
    case 'B':
    mv(0,1,80);
    mv(1,1,80);
    break;
    }
    Serial.println(comm);//debug, echo current state
    delay(100);
}
