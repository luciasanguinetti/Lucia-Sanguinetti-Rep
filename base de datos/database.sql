create table cliente (
	id int bigserial primary key,
	nombre varchar (20) not null,
	apellido varchar (20) not null,
	mail varchar (30) not NULL unique,
	fecha_nacimiento date not null,
	direccion varchar (40) not null,
	telefono varchar (9) not null
);


insert into cliente(nombre, apellido, mail, fecha_nacimiento, direccion, telefono)
values ('Lucia', 'Sanguinetti', 'luciasanguinettip@gmail.com','04/04/1996', 'Cisplatina 1287', '099953891');


insert into cliente(nombre, apellido, mail, fecha_nacimiento, direccion, telefono)
values ('Mariela', 'Parodi', 'marielaparodi66@gmail.com','31/07/1966', 'Lucas Obes 904', '098692574');



----

create table producto (
	id int bigserial primary key,
	nombre varchar (20) not null,
	precio varchar (4) not null
);


insert into producto(nombre, precio)
values ('Niguiri 5 piezas', '410');

insert into producto(nombre, precio)
values ('Sashimi 5 piezas', '460');

insert into producto(nombre, precio)
values ('Geishas 5 piezas', '410');

insert into producto(nombre, precio)
values ('Philadelphia roll 8 piezas', '380');

insert into producto(nombre, precio)
values ('New York roll 8 piezas', '380');

insert into producto(nombre, precio)
values ('Veggie roll 8 piezas', '380');

insert into producto(nombre, precio)
values ('Salmón trufado roll 8 piezas', '530');

insert into producto(nombre, precio)
values ('Cangrejo de rocha roll 8 piezas', '530');

insert into producto(nombre, precio)
values ('Tempura hot roll salmón 8 piezas', '530');

insert into producto(nombre, precio)
values ('Panko roll de langostino 8 piezas', '530');

insert into producto(nombre, precio)
values ('Combinado clásico 15 piezas', '650');

insert into producto(nombre, precio)
values ('Combinado clásico 30 piezas', '1150');

insert into producto(nombre, precio)
values ('Emigrante', '220');

insert into producto(nombre, precio)
values ('Tristán', '220');

insert into producto(nombre, precio)
values ('El Pistolero', '280');

insert into producto(nombre, precio)
values ('Maracanazo', '330');

insert into producto(nombre, precio)
values ('Ilegal', '300');

insert into producto(nombre, precio)
values ('No es changa', '260');

insert into producto(nombre, precio)
values ('Juana', '220');

insert into producto(nombre, precio)
values ('Cuareim', '220');
