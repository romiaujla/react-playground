import leapYear from './index';

it('throw error if year is less that 1582', ()=> {

    expect(()=>{
        leapYear(1568);
    }).toThrow();
    
});

it('divisible by 100, not 400, not a leap year', ()=>{
    expect(leapYear(1900)).toBe(false);
});

it('divisible by 400, leap year', ()=>{
    expect(leapYear(2000)).toBe(true);
});

it('divisible by 4, not 100, leap year', ()=>{
    expect(leapYear(1984)).toBe(true);
});

it('not divisible by 4, not a leap year', ()=>{
    expect(leapYear(2001)).toBe(false);
})