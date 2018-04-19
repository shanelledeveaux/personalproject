insert into casenotes (casenote, date, familyid) values ($1, $2, $3);
select * from casenotes where familyid =$3;