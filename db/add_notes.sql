insert into casenotes(familyid, date, casenote) values ($1, $2, $3);
select * from casenotes where familyid =$1;