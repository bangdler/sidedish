set
foreign_key_checks = 0;

drop table if exists category;
drop table if exists exhibition;
drop table if exists category_has_side_dish;
drop table if exists side_dish;
drop table if exists side_dish_image;
drop table if exists discount_event;
drop table if exists side_dish_has_discount_event;
drop table if exists member;
drop table if exists order_sheet;

set
foreign_key_checks = 1;

create table exhibition
(
    id    bigint primary key auto_increment,
    title varchar(100) not null comment '기획전 이름'
);

create table category
(
    id            bigint primary key auto_increment,
    title         varchar(100) not null comment '카테고리 이름',
    exhibition_id bigint default 1 comment '기획전 아이디',

    foreign key (exhibition_id) references exhibition (id)
);

create table category_has_side_dish
(
    category_id  bigint,
    side_dish_id bigint,

    primary key (category_id, side_dish_id),

    foreign key (category_id) references category (id)
);

create table side_dish
(
    id                  bigint primary key auto_increment,
    name                varchar(100) not null comment '반찬 이름',
    description         varchar(100) comment '반찬 설명',
    price               int comment '정상가격',
    accrual_rate        decimal(2, 2) comment '적립률',

    stock               int          default 3 comment '재고수량',

    shipping_info       varchar(100) default '서울 경기 새벽 배송, 전국 택배 배송' comment '배송정보',
    shipping_fee        int          default 2500 comment '배송료',
    exemption_condition int          default 40000 comment '배송비 면제 조건'
);

create table side_dish_image
(
    id           bigint primary key auto_increment,
    image_url    varchar(255) default 'https://naneun-220320.s3.ap-northeast-2.amazonaws.com/terria/noimage.png' comment '이미지 URL',
    image_seq    int comment '이미지 순서',
    side_dish_id bigint comment '반찬 아이디',

    foreign key (side_dish_id) references side_dish (id)
);

create table discount_event
(
    id            bigint primary key auto_increment,
    title         varchar(100) not null comment '할인 이벤트 이름',
    discount_rate decimal(2, 2) comment '할인율'
);

create table side_dish_has_discount_event
(
    side_dish_id      bigint,
    discount_event_id bigint,

    primary key (side_dish_id, discount_event_id),

    foreign key (side_dish_id) references side_dish (id)
);

create table member
(
    id           bigint primary key auto_increment,
    user_id      varchar(100) not null comment '사용자 아이디',
    provider     varchar(100) not null comment '리소스 서버',
    email        varchar(100) comment '이메일',
    name         varchar(100) not null comment '이름',

    access_token varchar(100) not null comment 'access-token',
    token_type   varchar(100) not null comment 'token_type',
    scope        varchar(100) not null comment 'scope',

    unique (user_id, provider)
);

create table order_sheet
(
    id           bigint primary key auto_increment,
    quantity     int      not null comment '주문 개수',
    total_amount int      not null comment '총 가격',
    created_at   datetime not null comment '주문 날짜',
    side_dish_id bigint   not null comment '반찬 아이디',
    member_id    bigint   not null comment '회원 아이디'
);
