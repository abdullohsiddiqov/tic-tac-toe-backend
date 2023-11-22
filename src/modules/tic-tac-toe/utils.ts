import { IEntity } from './types';

type TResultCheckWinner = IEntity.Player | '';

export function checkWinner(board: IEntity.Board): TResultCheckWinner {
	let winner: TResultCheckWinner = '';

	// your logics

	return winner;
}
