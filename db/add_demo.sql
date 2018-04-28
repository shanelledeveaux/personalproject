insert into demo (hud, snap, wic, tanf, familyid) values ($1, $2, $3, $4, $5);
select * from demo where familyid = $5;