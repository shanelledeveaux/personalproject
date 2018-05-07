insert into demo (goal, step1, step2, step3, familyid) values ($1, $2, $3, $4, $5);
select * from demo where familyid = $5;