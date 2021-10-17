import { getWinner } from './maths';

describe('getWinner function', () => {
  it('calls the getWinner function', () => {
    const spy = jest.spyOn(getWinner, {
      selection: 'selection',
      computerScore: 'computerScore',
      playerScore: 'playerScore'
    });

    // we pass 'get'
    // const isPlaying = video.play;

    expect(spy).toHaveBeenCalled();
    // expect(isPlaying).toBe(true);

    spy.mockRestore();
  });

  // it('returns an object', () => {
  //   const result = getWinner('rock', 1, 1);
  //   const playerSelection = passIn
  //   return console.log(result);
  // });
});
