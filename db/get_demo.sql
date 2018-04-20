SELECT * FROM Demo d 
JOIN family f ON d.familyid = f.familyid
WHERE casemgr = $1