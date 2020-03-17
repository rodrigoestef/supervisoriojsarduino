void setup() {
  // put your setup code here, to run once:
    Serial.begin(3600);
    pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  static byte i;
  if(Serial.read() > 1){
    i ^= 1;
  }

  digitalWrite(13,i);
}
