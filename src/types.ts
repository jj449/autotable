import { Vector3, Euler } from "three";

export enum ThingType {
  TILE = 'TILE',
  STICK = 'STICK',
  MARKER = 'MARKER',
}

export const Size = {
  TILE: new Vector3(6, 9, 4),
  STICK: new Vector3(20, 2, 1),
  MARKER: new Vector3(12, 6, 1),
};

export interface Place {
  position: Vector3;
  rotation: Euler;
  size: Vector3;
}

export interface ThingInfo {
  slotName: string;
  rotationIndex: number;
  claimedBy: number | null;
  heldRotation: { x: number; y: number; z: number };
  shiftSlotName: string | null;
}

export interface MatchInfo {
  dealer: number;
  honba: number;
  conditions: Conditions;
}

export interface Game {
  gameId: string;
  num: number;
  secret: string;
}

export enum DealType {
  INITIAL = 'INITIAL',
  WINDS = 'WINDS',
  HANDS = 'HANDS',
}

export type Fives = '000' | '111' | '121';

export enum GameType {
  FOUR_PLAYER = 'FOUR_PLAYER',
  THREE_PLAYER = 'THREE_PLAYER',
  BAMBOO = 'BAMBOO',
  MINEFIELD = 'MINEFIELD',
}

export type Points = '25' | '30' | '35' | '40' | '100';

export interface Conditions {
  gameType: GameType;
  back: number; // 0 or 1
  fives: Fives;
  points: Points;
}

export namespace Conditions {
  export function initial(): Conditions {
    return { gameType: GameType.FOUR_PLAYER, back: 0, fives: '111', points: '25' };
  }

  export function equals(a: Conditions, b: Conditions): boolean {
    return a.gameType === b.gameType && a.back === b.back && a.fives === b.fives;
  }

  export function describe(ts: Conditions): string {
    const game = {'FOUR_PLAYER': '4p', 'THREE_PLAYER': '3p', 'BAMBOO': 'b', 'MINEFIELD': 'm'}[ts.gameType];
    const fives = {'000': 'no red', '111': '1-1-1', '121': '1-2-1'}[ts.fives];
    return `${game}, ${fives}`;
  }
}

export interface MouseInfo {
  held: {x: number; y: number; z: number} | null;
  mouse: {x: number; y: number; z: number; time: number} | null;
}

export enum SoundType {
  DISCARD = 'DISCARD',
  STICK = 'STICK',
};

export interface SoundInfo {
  type: SoundType;
  seat: number;
  side: number | null;
}

export interface SeatInfo {
  seat: number | null;
}
