import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { getProfile } from '../services/profiles';

export default function ProfileForm2({
  name,
  setName,
  email,
  birthday,
  setBirthday,
  bio,
  setBio,
  handleSubmit,
}) {
  return (
    <form>
      <label> name </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>email</label>
      <input type="email" name="email" value={email} readOnly />
      <label> date</label>
      <input
        type="date"
        name="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <label>bio</label>
      <textarea
        type="text"
        name="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}