// Add your code here
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.servoRun(maqueen.Servos.S1, 90)
basic.pause(1000)
maqueen.servoRun(maqueen.Servos.S2, 90)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
maqueen.writeLED(maqueen.LED.LEDLeft,maqueen.LEDswitch.turnOn)
basic.pause(1000)
maqueen.writeLED(maqueen.LED.LEDLeft,maqueen.LEDswitch.turnOff)
basic.pause(1000)
maqueen.writeLED(maqueen.LED.LEDRight,maqueen.LEDswitch.turnOn )
basic.pause(1000)
maqueen.writeLED(maqueen.LED.LEDRight,maqueen.LEDswitch.turnOff)
serial.writeLine("L:" + maqueen.readPatrol(maqueen.Patrol.PatrolLeft))
basic.pause(1000)
serial.writeLine("R:" + maqueen.readPatrol(maqueen.Patrol.PatrolRight))
basic.pause(1000)
serial.writeLine("IR:" + maqueen.IR_read())
basic.pause(1000)
serial.writeLine("V:" + maqueen.IR_read_version())
basic.pause(1000)
serial.writeLine("CM:" + maqueen.Ultrasonic(PingUnit.Centimeters))
basic.pause(1000)

