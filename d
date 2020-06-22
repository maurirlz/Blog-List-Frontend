
exec - execute command in current process

   exec COMMAND [OPTIONS...]

[1mDESCRIPTION[0m
[1mexec[0m  replaces  the  currently  running shell with a new command. On successful completion, [1mexec[0m never returns. [1mexec[0m cannot be
used inside a pipeline.

[1mEXAMPLE[0m
[1mexec[0m [1memacs[0m starts up the emacs text editor, and exits [1mfish[0m. When emacs exits, the session will terminate.
