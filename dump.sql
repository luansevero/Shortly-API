--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u7cg55p8fn5e1p
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u7cg55p8fn5e1p;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: weshwjytkpujwj
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.links OWNER TO weshwjytkpujwj;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: weshwjytkpujwj
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO weshwjytkpujwj;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: weshwjytkpujwj
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: weshwjytkpujwj
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO weshwjytkpujwj;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: weshwjytkpujwj
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO weshwjytkpujwj;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: weshwjytkpujwj
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: weshwjytkpujwj
--

COPY public.links (id, "userId", url, "shortUrl", "visitCount") FROM stdin;
3	1	https://www.w3schools.com	UPSoKkyN	7
2	1	https://google.com	C19rlnx1	3
9	10	https://64.media.tumblr.com/f1a49ead62c4f00b8da4536bfec132b4/tumblr_pqgrapbv7i1urli1fo1_540.gifv	KQCHUAyS	22
1	1	https://youtube.com	DpnGLREg	3
4	2	https://www.w3schools.com	n4EqNWmd	0
5	2	https://pbs.twimg.com/media/FP3A-hnWQAMTQuK?format=jpg&name=large	xd06eYZ_	21
6	3	https://i.pinimg.com/originals/4c/c0/fb/4cc0fb4d9fcbe92de22b8717a7d3eebf.gif	NPc3mneX	2
7	10	https://media1.giphy.com/media/lobRpLsXzHAnQGTn9n/giphy.gif	VQrqCi8U	3
8	10	https://media.giphy.com/media/6mmlYoat546kaGj1CL/giphy.gif	2DJfLIRF	6
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: weshwjytkpujwj
--

COPY public.users (id, name, email, password) FROM stdin;
1	devadmin	luangomes@gmail.com	$2b$10$mBUfuXNfUCsVQhPHOFmwpefv/5XEAE/Q.sUukt64FxrDdTtW5EQzq
2	Miranha	miranha@gmail.com	$2b$10$c70H.koddZHYIxlA3bbw6u8.M0bNPFkHU11h4QKwzFikYxuhcFOOK
3	disneylandia	disneylandia@gmail.com	$2b$10$KRKFCYR28tQuxCkHHBiEkeT6laJvtEOQxgzHGFUoh4noi8mG49ncy
4	Yudi	bomdia&cia@gmail.com	$2b$10$GY6vFEnUhIiuKdac8sW8KORCIm2L2jfEydsfNyg.RwzE8igD1zwQK
5	Drake	drake&josh@gmail.com	$2b$10$nz7WeyktcJ6Lp3pmsJMFpevvlUpmqnOHFqlGfkEeFEokg94oW6TbC
6	Faustão	faustosilva@gmail.com	$2b$10$LSndpTSYwIW6PKQ472Q/0e0l2hlUpuwxH9OeZACrjyYGBrsmdikeu
7	Minhonzera	yeezy@gmail.com	$2b$10$1F84LP8dloYO8jNJ1YqqW.oe6v1YXuJDgyIkK/fOwheISYEA4QsW2
8	kenny	west@gmail.com	$2b$10$8fOB.Qe52gxDGfGSSDBa8.q5V2PY9MwBYiiwa0QlU.caPuGkrwOYO
9	LebroonnnJames	lbj@gmail.com	$2b$10$HqUm0AfZ.kHd1GAg6xJ48OSxLucoWd2rxYIo1kFq5B6X.hZQWM/eC
10	DameTime	damelillar@gmail.com	$2b$10$lneTQkB8bEq5xoY0Eu9Q3.OhJmQpJuCNtBX0.zIOv9s15B20aroIG
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weshwjytkpujwj
--

SELECT pg_catalog.setval('public.links_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weshwjytkpujwj
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: links links_pk; Type: CONSTRAINT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pk PRIMARY KEY (id);


--
-- Name: links links_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: links links_fk0; Type: FK CONSTRAINT; Schema: public; Owner: weshwjytkpujwj
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u7cg55p8fn5e1p
--

GRANT USAGE ON SCHEMA heroku_ext TO weshwjytkpujwj;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: weshwjytkpujwj
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO weshwjytkpujwj;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO weshwjytkpujwj;


--
-- PostgreSQL database dump complete
--

