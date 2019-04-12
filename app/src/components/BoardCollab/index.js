import React from 'react';

import SquareCollab from "../SquareCollab";

const SquareCollab = qtd => (
    const max = qtd;
    const squares = [];

    while(max --) {
        squares.push(<SquareCollab key={max} />);
    }

    return squares;
)

const BoardCollab = ((qtd) => (
    <article>{SquareCollab(qtd)}</article>
));

export default BoardCollab;