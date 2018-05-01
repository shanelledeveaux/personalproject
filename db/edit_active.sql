update memberinfo
set active = $1
where personid = $2;
select * from memberinfo where familyid= $3;