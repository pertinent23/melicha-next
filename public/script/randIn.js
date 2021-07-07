function randIn( min, max ) {
    const 
        base = 10 * `${max}`.length,
        res = ( Math.round( Math.random() * base ) % max ) + min;
    return res >= min && res <= max ? res : randIn( min, max );
};