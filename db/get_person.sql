select * from memberinfo 
where familyid = $1;

-- SELECT * FROM memberinfo m 
-- JOIN family f ON m.familyid = f.familyid
-- WHERE casemgr = $1