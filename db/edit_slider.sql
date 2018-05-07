update demo
set slider = $1
where demoid = $2;
select * from demo where familyid= $3;