INSERT INTO clinics
    (id, name, city, address, telephone, email, password, image)
VALUES
    (1, 'Happy Pet', 'Vancouver', '123 Dawson street', '543-432-3211', 'contact@vancouvervetclinic.com', '#RR4tr54ff34$#r', 'https://static.bookinghealth.com/uploads/clinics/gallery/m/9247-Clinic-for-Plastic-and-Aesthetic-Surgery-Cologne_800.jpg'),
    (2, 'Best For Pets', 'Calgary', '547 Vet street', '873-742-5671', 'contact@victoriavetclinic.com', '#RR4tr54ff34$#r', 'https://karandash.ua/site/assets/files/46097/img_0281.jpg'),
    (3, 'Pet Life Care', 'Victoria', '12 Marine Dr.', '743-432-3541', 'contact@calgaryvetclinic.com', '#RR4tr54ff34$#r', 'https://i.pinimg.com/originals/3f/23/a4/3f23a4402227b7e3733a9a1137d852c2.jpg'),
    (4, 'Fauna Vet Clinic', 'Toronto', '3 Ave. - 145', '763-352-3211', 'contact@torontovetclinic.com', '#RR4tr54ff34$#r', 'https://signaturesmilez.ca/wp-content/uploads/2020/06/IMG_1236.jpg'),
    (10, 'For Your Pet', 'Toronto', '999 Cat street', '123-312-2311', 'contact@bbar.com', '#RR4tr54ff34$#r', 'https://www.beautybarclinics.com/wp-content/uploads/IMG_20041-800x600.jpg'),
    (11, 'Vancouver Pets', 'Vancouver', '989 Plumb street', '753-892-9911', 'contact@vetar.com', '#RR4tr54ff34$#r', 'https://i.pinimg.com/originals/e4/b6/ef/e4b6eff574286cb748ea5c1ca4e24a51.jpg'),
    (12, 'Parrot Vet', 'Vancouver', '333 Parrot street', '573-132-9988', 'contact@someemael.com', '#RR4tr54ff34$#r', 'https://static.bookinghealth.com/uploads/clinics/gallery/m/9408-4305-Kontakt_web.jpg'),
    (13, 'Best Vet For Best Pet', 'Victoria', '533 Foster Ave.', '153-342-9344', 'cdfsaefct@gmail.com', '#RR4tr54ff34$#r', 'https://s3-media0.fl.yelpcdn.com/bphoto/AeYdp656gB1qpmmF7AnQjQ/o.jpg');
INSERT INTO pet_types
    (id, type)
VALUES
    (1, 'Bird'),
    (2, 'Cat'),
    (3, 'Dog'),
    (4, 'Fish'),
    (5, 'Reptile')
;

INSERT INTO clinic_pet_types
    (id, clinic_id, pet_type_id)
VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 1, 3),
    (4, 1, 4),
    (5, 1, 5),
    (6, 2, 2),
    (7, 2, 3),
    (8, 3, 1),
    (9, 3, 2),
    (10, 3, 3),
    (11, 3, 4),
    (12, 3, 5),
    (14, 4, 2),
    (15, 4, 3),
    (16, 4, 4),
    (20, 10, 1),
    (21, 10, 2),
    (22, 10, 3),
    (23, 11, 3),
    (24, 11, 4),
    (25, 11, 5),
    (26, 12, 1),
    (27, 12, 2),
    (28, 12, 3),
    (29, 13, 4),
    (30, 13, 5)
;


INSERT INTO owners
    (id, first_name, last_name, telephone, email, password)
VALUES
    (1, 'Danyl', 'Walton', '323-543-7873', 'danylwalton@gmail.com', '@$45gfrf4#gf'),
    (2, 'Katya', 'Hirst', '342-202-4798', 'katyahirst@gmail.com', '@$45gfrf4#gf'),
    (3, 'Joann', 'Johnson', '890-137-0664', 'joannjohnson@gmail.com', '@$45gfrf4#gf'),
    (4, 'Aaryan', 'Mccartney', '870-878-3537', 'aaryanmccartney@gmail.com', '@$45gfrf4#gf'),
    (5, 'Leona', 'Carver', '266-786-3986', 'leonacarver@gmail.com', '@$45gfrf4#gf'),
    (6, 'Chante', 'Neville', '787-987-0845', 'chanteneville@gmail.com', '@$45gfrf4#gf')
;

INSERT INTO pets
    (id, type_id, owner_id, name, age, gender, breed, weight, info, image)
VALUES
    (1, 1, 2, 'Oliver', 3, 'Male', 'Parrot', 6, 'Perfectly healthy long haired cat.', 'path/to/image'),
    (2, 3, 2, 'Leo', 4, 'Female', 'Lab', 6, 'Friendly female lab - needs vitamins.', 'path/to/image'),
    (3, 4, 3, 'Milo', 3, 'Female', 'Piranha', 6, 'Perfectly healthy fish.', 'path/to/image'),
    (4, 2, 5, 'Charlie', 1, 'Male', 'Angora', 6, 'Just had kittens.', 'path/to/image'),
    (5, 5, 6, 'Max', 9, 'Male', 'Python', 6, '27 foot long python - ate small car before check up', 'path/to/image'),
    (6, 4, 2, 'Jack', 3, 'Female', 'Goldfish', 6, 'Requires a checkup next month.', 'path/to/image'),
    (7, 2, 5, 'Simba', 3, 'Male', 'Orange Cat', 6, 'Perfectly healthy.', 'path/to/image'),
    (8, 3, 1, 'Loki', 3, 'Female', 'Pitbull', 6, 'Friendly and energetic.', 'path/to/image'),
    (9, 1, 6, 'Oscar', 3, 'Male', 'Zebra Finch', 6, 'Overweight - advised owner to feed less bird seed.', 'path/to/image'),
    (10, 3, 4, 'Jasper', 3, 'Female', 'Shiba', 6, 'Perfectly healthy Shiba Inu.', 'path/to/image'),
    (11, 2, 3, 'Toby', 3, 'Female', 'Angora', 6, 'Ate .', 'path/to/image'),
    (12, 4, 5, 'Simon', 3, 'Male', 'Angora', 6, 'Perfectly healthy long haired cat.', 'path/to/image'),
    (13, 1, 1, 'Dexter', 3, 'Female', 'Angora', 6, 'Perfectly healthy long haired cat.', 'path/to/image')
;

INSERT INTO appointments
    (id, clinic_id, pet_id, date_apt, time_id)
VALUES
    (1, 1, 2, '2020-10-04T00:00:00Z', 11),
    (2, 3, 3, '2020-10-04T00:00:00Z', 12),
    (3, 4, 3, '2020-10-05T00:00:00Z', 12),
    (4, 2, 3, '2020-10-06T00:00:00Z', 14),
    (5, 4, 3, '2020-10-07T00:00:00Z', 15),
    (6, 2, 3, '2020-10-07T00:00:00Z', 13)
;