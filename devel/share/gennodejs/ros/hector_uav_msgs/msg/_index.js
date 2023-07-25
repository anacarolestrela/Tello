
"use strict";

let PositionXYCommand = require('./PositionXYCommand.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let Compass = require('./Compass.js');
let RawRC = require('./RawRC.js');
let RawImu = require('./RawImu.js');
let RawMagnetic = require('./RawMagnetic.js');
let RC = require('./RC.js');
let HeadingCommand = require('./HeadingCommand.js');
let ControllerState = require('./ControllerState.js');
let Altimeter = require('./Altimeter.js');
let YawrateCommand = require('./YawrateCommand.js');
let ServoCommand = require('./ServoCommand.js');
let Supply = require('./Supply.js');
let HeightCommand = require('./HeightCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let MotorPWM = require('./MotorPWM.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let MotorStatus = require('./MotorStatus.js');
let ThrustCommand = require('./ThrustCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let MotorCommand = require('./MotorCommand.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let PoseGoal = require('./PoseGoal.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let TakeoffResult = require('./TakeoffResult.js');
let LandingResult = require('./LandingResult.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let PoseAction = require('./PoseAction.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let LandingActionResult = require('./LandingActionResult.js');
let LandingGoal = require('./LandingGoal.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let PoseFeedback = require('./PoseFeedback.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let LandingFeedback = require('./LandingFeedback.js');
let TakeoffAction = require('./TakeoffAction.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let LandingAction = require('./LandingAction.js');
let PoseResult = require('./PoseResult.js');
let TakeoffGoal = require('./TakeoffGoal.js');

module.exports = {
  PositionXYCommand: PositionXYCommand,
  AttitudeCommand: AttitudeCommand,
  Compass: Compass,
  RawRC: RawRC,
  RawImu: RawImu,
  RawMagnetic: RawMagnetic,
  RC: RC,
  HeadingCommand: HeadingCommand,
  ControllerState: ControllerState,
  Altimeter: Altimeter,
  YawrateCommand: YawrateCommand,
  ServoCommand: ServoCommand,
  Supply: Supply,
  HeightCommand: HeightCommand,
  VelocityXYCommand: VelocityXYCommand,
  MotorPWM: MotorPWM,
  VelocityZCommand: VelocityZCommand,
  MotorStatus: MotorStatus,
  ThrustCommand: ThrustCommand,
  RuddersCommand: RuddersCommand,
  MotorCommand: MotorCommand,
  PoseActionFeedback: PoseActionFeedback,
  PoseGoal: PoseGoal,
  LandingActionGoal: LandingActionGoal,
  TakeoffResult: TakeoffResult,
  LandingResult: LandingResult,
  TakeoffFeedback: TakeoffFeedback,
  PoseAction: PoseAction,
  PoseActionGoal: PoseActionGoal,
  LandingActionResult: LandingActionResult,
  LandingGoal: LandingGoal,
  TakeoffActionFeedback: TakeoffActionFeedback,
  PoseActionResult: PoseActionResult,
  LandingActionFeedback: LandingActionFeedback,
  PoseFeedback: PoseFeedback,
  TakeoffActionResult: TakeoffActionResult,
  LandingFeedback: LandingFeedback,
  TakeoffAction: TakeoffAction,
  TakeoffActionGoal: TakeoffActionGoal,
  LandingAction: LandingAction,
  PoseResult: PoseResult,
  TakeoffGoal: TakeoffGoal,
};
