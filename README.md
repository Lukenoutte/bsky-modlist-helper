# Bsky Modlist Helper

Bsky Modlist Helper is a script designed to assist with managing and adding users to a modlist on the Bluesky social network using the AT Protocol.

#  Setup

Follow the steps below to set up the project:

**Clone the repository:**

```bash
  git clone https://github.com/lukenoutte/bsky-modlist-helper.git
  cd bsky-modlist-helper
```

**Install dependencies:**

```bash
  yarn install
```

## Create a .env file:

Copy the [.env.example](.env.example) file and rename it to .env.

**Open the .env file and update the variables with your own information:**

USER_IDENTIFIER: Your Bluesky username or email address used for authentication.

USER_PASSWORD: Your Bluesky account password.

LIST_URI_TO_ADD: The URI of the modlist where users will be added.

FEED_URI_TO_FIND_USERS: The URI of the feed from which to retrieve users to add to the modlist.

# Usage

After configuring the environment variables, you can run the script with:

```bash
  yarn start
```

# Notes
Ensure that the account specified by USER_IDENTIFIER has the necessary permissions to modify the modlist.

Handle your credentials securely and avoid sharing your .env file publicly.
