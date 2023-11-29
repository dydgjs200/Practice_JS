create table customer (
	custid char(10) primary key,
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
    );
    
desc customer;

-- insert
insert into customer (custid, custname, addr, phone, birth) 
values ('lucky', '홍길동', 'USA', '01011111111', '2023-11-28');
insert into customer (custid, custname, addr, phone, birth) 
values ('apple', '견우', '대한민국', '01022221111', '2022-12-12');
-- 여러 튜플 동시 추가 
insert into customer values ('grapedddd', '이름1', 'korea', '01022215555', '2012-11-21'),
('banana', '이름2', 'korea', '01022215555', '2012-11-21'),
('melon', '이름3', 'korea', '01022215555', '2012-11-21'),
('lee', '이름4', 'korea', '01022215555', '2012-11-21');

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- select
select * from customer;
select custid from customer; 

-- where 조건
-- 비교 : = > < <= >=
-- 범위 : BETWEEN
-- 집합 : IN, NOT IN
-- 패턴 : LIKE
-- NULL : IS NULL, IS NOT NULL
-- 복합 조건 : AND, OR, NOT

/*
    where VS having

    - where
        1. 각 행을 필터링
        2. group by 앞에 위치
        3. 집계함수 사용 X
    - having
        1. 그룹에 대한 필터링 (group by로 그룹 지정해야함)
        2. group by 뒤에 위치
        3. 집계함수랑 사용 가능

*/