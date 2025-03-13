"use client";

import { useState } from "react";
import UsersCards from "../components/user-card/UserCard";

interface GeoCode {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCode;
}

interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export default function Users() {
  

  return (
    <UsersCards/>
  );
}
