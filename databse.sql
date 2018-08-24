create table rooms (
id serial primary key,
field1 varchar (255),
field2 varchar (255),
field3 varchar (255),
field4 varchar (255),
field5 varchar (255),
field6 varchar (255),
field7 varchar (255),
field8 varchar (255),
field9 varchar (255),
active_player varchar (255)
);

insert into rooms (field1, field2, field3, field4, field5, field6, field7, field8, field9, active_player)
values (' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x');


UPDATE rooms
SET field1=' ', field2=' ', field3=' ', field4=' ', field5=' ', field6=' ', field7=' ', field8=' ', field9=' '
WHERE id=1; 


