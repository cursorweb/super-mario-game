/**
 * --BLOCKS--
 * P = player
 * @ = portal
 * M = trampoline
 * b = normal block
 * _ = ice
 * # = lava
 * & = monster
 * % = cannon
 * -: Block of ice
 * X: Brick
 * A = Spike up
 * >: Spike right
 * <: Spike left
 * V: Spike down
 * ?: Mystery box
 * E: Acid
 * C: Mystery box that disappears
 * 17 max lines for y
 * 20 max lines for x
 */
/*
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                   P",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
*/
var levels = [
  [
    "           #        ",
    " _              &   ",
    "                    ",
    "     %_             ",
    "     __             ",
    "       _   b        ",
    "    _               ",
    "                    ",
    "           #     A  ",
    "                <b> ",
    "     M           V  ",
    "         M          ",
    "  E                 ",
    "     MOOOOOOOOOOOOOO",
    "             ?      ",
    "     M  X       -   ",
    "        #     P     ",
    "    _   #&        @  b",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "                   ",
    "            %%%%%%%",
    "           #       ",
    "           #       ",
    "    ?      #       ",
    "       OOO #       ",
    "    O O   O        ",
    "@OOO-O  E OOOOOOOOOP",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO?",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOOOOOOEOOOOOOOOO ",
    "OOOO@OOOEOOOOOOOOOP",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO###########",
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO###########",
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO###########",
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO###########",
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO###########",
    "O-OOOOOOEEEEEEEEEEE",
    "O-OOOOOO#C#########",
    "O-OOOOOOO  O  O  O ",
    "O-OOOOOOO  O  O  O ",
    "O-OOOOOOO  O  O  O ",
    "O-OOOOOOO  O  O  O ",
    "@-OOOOOOM  M  M  M P",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "b@  &&&MMMM&&&&&&&&&Pb",
    "bbbbbbbbbbbC bbbbbbbXX",
    "bbbbbbbbbbb  bbbbbbb",
    "bbbbbbbbbbb  bbbbbbb",
    "bbbbbbbbbbb##bbbbbbb",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "           ?        ",
    "                    ",
    "           XX       ",
    "b@&&&&&&&&X  X&&&&&P",
    "bbbbbbbbbbb  bbbbbbb",
    "bbbbbbbbbbb  bbbbbbb",
    "bbbbbbbbbbb%%bbbbbbb",
    "bbbbbbbbbbb##bbbbbbb",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "    ",
    "               ?       ",
    "                       ",
    "                __     ",
    "          __        b  ",
    "     XXXXXXXXXXXXXX    ",
    "O  OX%%%%%%%%%%%%%%XOOOXX",
    "O  OXOOOOOOOOOOOOOOXOOOOX",
    "O  OXOOOOOOOOOOOOOOXXOOOX",
    "O  OXOOOOOOOOOOOOOOXOOOOX",
    "O  OXOOOOOOOOOOOOOOXOOOXX",
    "O  OXOOOOOOOOOOOOOOXXOOOX",
    "O  OXOOOOOOOOOOOOOOXOOOOX",
    "O  OXOOOOOOOOOOOOOOXOOOXX",
    "O  OXOOObOObOOOOOOOXXOOOX",
    "O  OXOOOOOOOOOOOOOOXOOOOX",
    "b&&&&&AAAA&&&&&&&&@XOPOXX",
    "bbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "               O___O                          ",
    "              O_____                     &&&&&",
    "             O______                          ",
    "            O_______         O                ",
    "           O________    &           O         ",
    "          O_________       %%                 ",
    "         O__________    &&       %%%  O       ",
    "        O___________            &&            ",
    "       O____________                  O       ",
    "      O_____________         %%%  O   &&      ",
    "     O______________                          ",
    "    O_______________              &&& O       ",
    "   O________________          %%  O   O   O   ",
    "  O_________________               &&         ",
    " O__________________  C        %% O   O   O OO",
    "P___________________AAAAAAAAAAAAAAAAAAAAAAAAA@",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "   O O O O O O O O  ",
    "@ O O O O O O O O OP",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "       ",
    "     ",
    "   ",
    "   ",
    "?   ",
    "  ",
    "@    ",
    "-       ",
    "   ",
    "                      A",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M->                  <b",
    "M-AAAAAAAAAAAAAAAAAAAAb",
    "M-bbbbbbbbbbbbbbbbbbbbb",
    "M-VVVVVVVVVVVVVVVVVVVVb",
    "M-                    b",
    "M-                    b",
    "M-                    b",
    "M-                    b",
    "M-   M  M   M   M  M Pb",
    "bbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    '               ',
    '               ',
    '               ',
    '            @  ',
    '            b  ',
    '               ',
    '               ',
    'P A  A  A  A  b',
    'XXXXXXXXXXXX  b',
    '&%C%&%C%&%C%& b',
    'C&C&C&C&C&C&C b',
    'CC&CCC&CCC&CM b',
    'bbbbbbbbbbbbbbb'
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "   O O O O O O O O  ",
    "P O O O O O O O O O@",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "  ",
    "                    ",
    "                 ?  ",
    "                    ",
    "            M                            @",
    "                            M          bbb",
    "                    M                      M   ",
    "         M                               M",
    "                 M                   M",
    "                       M         M",
    "      M                        M",
    "               M          M  ",
    "                           ",
    "            M              ",
    "                           ",
    "        M                  ",
    "                           ",
    "           M               ",
    "                           ",
    "       M                    ",
    "b&                          &&&&&&&&&&&&&&&&&&&&",
    "bbbbbPMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "   ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "@                           ",
    "M  M     M                    ",
    "               M                    ",
    "                   M                            ",
    "                       M                    ",
    "                                               ",
    "                            M                   ",
    "                                               ",
    "                              M                 ",
    "                                  M             ",
    "          ?                         M           ",
    "                                      M         ",
    "                                       M        ",
    "                                         M      ",
    "                                           M    ",
    "                                             M  ",
    "%%%%&&&%&%&%%%&&&                              P ",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAA",
  ],
  [
    "  ",
    "                           ",
    "               ?           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "           M                ",
    "                      M     ",
    "                           ",
    "       M         M           ",
    "                           ",
    " M           M              M       M      ",
    "   M        M                 M     ",
    "  M            M    M    M           M   ",
    "     M             M       M          ",
    "           M      M             M    ",
    "   M                   @",
    "           M       M   b   M ",
    "                           ",
    "    M          M       M      ",
    "                           ",
    "           M        M        ",
    " M            M         M     ",
    "      M                     ",
    "           M       M         ",
    "                           ",
    "    M                    M   ",
    "             M       M     M  ",
    "     M                      ",
    "         M                  ",
    "   M            M           ",
    "                XXXXXXXXOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOXXXXX",
    "                XOOOOOOOOOX",
    "                XOOOOOOOOOX",
    "                XXXXXXOOOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOXXXXX",
    "                XOOOOOOOOOX",
    "                XOOOOOOOOOX",
    "                XXXXXXOOOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOXXXXX",
    "                XOOOOOOOOOX",
    "                XOOOOOOOOOX",
    "                XXXXXXOOOOX",
    "                XOOOOOOOOOX",
    "                XOOOOOXXXXX",
    "AAAAAAAAAAAAAAAAXOOOOPOOOOXAAAAAAAAAAAA",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "POOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ",
    "bbbbbbbbbb bbbbbbbbbbCbbbbbbbbCbbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbObbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbbObbbbbbbbEbbbbbbbbb",
    "bbbbbbbbbb bbbbbbbbbb#bbbbbbbbEbbbbbbbbb",
    "bbbbbbbbbb@bbbbbbbbbbbbbbbbbbbEbbbbbbbbb",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "P OOOOOOOOOOOOOOOOOO",
    "b bbbbbbbbbbbbbbbbbb",
    "b bbb#bbbbbbbbbbbbbb",
    "b bbbObbbbbbbbbbbbbb",
    "b OOOOOOOOOOOOOOOObb",
    "bbbbbMbbbbbbbbbbb bb",
    "bb?        &&      b",
    "bbbbbbbbbbbbbbbbb bb",
    "bb             &&  b",
    "bbbbbbbbbbbbbbbbb bb",
    "bbbbbb            bb",
    "bbbbbb     @bbbbb bb",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                 ?  ",
    "                 -  ",
    "                    ",
    "                  OO",
    "                 OXO",
    "                 X @",
    "              O    b",
    "              X     ",
    "            O       ",
    "            X       ",
    "         O          ",
    "         X          ",
    "      O             ",
    "      X             ",
    "    O               ",
    "    X               ",
    "O                   ",
    "X  O                ",
    "   X  O             ",
    "      X  O          ",
    "         X         P",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "               %%%%%%%%%%%     ",
    "    %%%%%%%%%%%%%%                ",
    "   %%%%%%%%%%%%       %%%%%%%        ",
    "             %%%%%%%%%       ",
    " %%%%%%%%%%%%  %%%%%%%%%%%%%%%%%%   %%%%%%%%%%  ",
    "    %%%%%%%%%%%%%%  %%%%%%%%%%%%% ",
    "      %%%%%%%%%%%%              %%%%%%%%%%%%%% ",
    "%%%%%%%%%%%%%%%%%%%%       %%%%%%%%%%%%%%%%%%%%%%%%%% ",
    "    %%%%%%%%%%%%%%%%%%%%%%%%             %%%%%%%%%%%%%",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "OOOOOOOOOOOOOOC???C?OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    "OOOO__________________________________    ___________ P",
    "OOO %                                                __",
    "@__  _____________________ __ _ _ _ __              AA",
    "___                 ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  ],
  [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "@OOOOOOOOOOOOOOOOOOOP",
    "bXXXXXXXXXXXXXXXXXXXb",
  ],
  [
    "bbbbbbbbbbbbbbbbbbbb",
    "%%%%%%%%%%%%%%%%%%%%",
    "%%%%%%%%%%%%%%%%%%%%",
    "%%%%%%%%%%%%%%%%%%%%",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X        ?        &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "X&                 X",
    "X                 &X",
    "M O O O O O O M O   ",
    "M M O M M M O M O   ",
    "M M M M M M M M M   ",
    "M M M O M M O M M   ",
    "M M M M M M O M M   ",
    "M M M M M M M M M   ",
    "M M O M M M M M M   ",
    "M M O M O M O M M   ",
    "M M M M M M M M M   ",
    "M M O M O M M O M   ",
    "M M M M M O M M M   ",
    "M M M M M M M M M   ",
    "M M M O M M O M M   ",
    "M M O M M M M M M   ",
    "M M M M M M M M M   ",
    "M M M M M M M M M   ",
    "M M M M O M M O M   ",
    "M M O M M M O M M   ",
    "M M M M M @ M M M   ",
    "M M M M M M M M M   ",
    "M O M M M M O M M   ",
    "M M M M M M M M M   ",
    "M O O O O O O O M   ",
    "M M M M M M M M M   ",
    "M M M O M M M M M   ",
    "M M M M M M O M M   ",
    "M M O M M M M M M   ",
    "M M M M O M M M M   ",
    "M M M O M M M M M   ",
    "M M M M M O M M M   ",
    "M M M M M M M M M   ",
    "M M M O M M M M M   ",
    "M M M M M M M M M M ",
    "M M M M M M M M M MP",
    "bbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "bbbbbbbbbbbbbbbbbbbbbb",
    "b% % % % % % % % % % b",
    "b % % % % % % % % % %b",
    "b                    b",
    "b                    b",
    "b         @          b",
    "X&  - M   b      - & X",
    "X& M  -   -   &    & X",
    "X&   O    &  M  M  & X",
    "X&       &    &    & X",
    "X& &     M       M & X",
    "X&   M &      M    & X",
    "X&  O     M  O     & X",
    "X& M     O     O   & X",
    "X&     O     O     & X",
    "X&   M - &   M  O  & X",
    "X&              -  & X",
    "X&  &   O   O      & X",
    "X& -        M   &  & X",
    "X&  &   M     -    & X",
    "X&     -        &  & X",
    "X&  O  &     M     & X",
    "X&   &          &  & X",
    "X&  -    M         & X",
    "X&    &     &   O  & X",
    "X&  M      -       & X",
    "X&      O     &    & X",
    "X& -&       &  M   & X",
    "X&    &   M        & X",
    "X&   M       & &   & X",
    "X&    &   -        & X",
    "X&    -     &  O   & X",
    "X& O   -  M        & X",
    "X&           M -   & X",
    "X&   -   M         & X",
    "X&   O      &   O  & X",
    "X& M     &  O      & X",
    "X&      O     M    & X",
    "X&                 & X",
    "X&  O   M  -       & X",
    "X&             O   & X",
    "X& M  O      M     & X",
    "X&           -     & X",
    "bMMMMMMMMMMMMMMMMMMMPb",
    "bbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "bbbbbbbbbbbbbbbbbbbbbb",
    "b%  M  O         O  %b",
    "b         %  O   M   b",
    "b     M   M          b",
    "b M   O            O b",
    "b            %  M    b",
    "b    M   M     O     b",
    "b         O  M    M  b",
    "b O   %              b",
    "b  M    M     M    M b",
    "b         %          b",
    "b   M    X&X %  X&X  b",
    "b    %          X&X  b",
    "b M  X&X    M        b",
    "b M  X&X  M   O X&X @b",
    "bO     %    X&X X&X bb",
    "b    -       M   -   b",
    "b X&X    X&X         b",
    "bX&X  O      % X&X   b",
    "b   X&X    O       M b",
    "bX&X   X&X   %   -   b",
    "b         M     O    b",
    "b  O  %   X&X     X&Xb",
    "b              O     b",
    "b X&X   - %  X&X   M b",
    "b %   O M       O    b",
    "bO   M     X&X M     b",
    "b   X&X %         M  b",
    "b    O    X&X    -   b",
    "bMMMMMMMMMMMMMMMMMMMPb",
    "bbbbbbbbbbbbbbbbbbbbbb",
  ],
  [
    "bbbbbbbbbbbbbbbbbbbbbb",
    "bA  -  O         O  Ab",
    "bb        A  O   -  bb",
    "b     -   b          b",
    "b -   O            O b",
    "b        M   A  -    b",
    "b    M   -   b O     b",
    "b         O  -    -  b",
    "b O   A   M     M    b",
    "b  -  b -     -    - b",
    "b M       A          b",
    "b   -    -b- A  -&-  b",
    "b    A  M    b  -&-  b",
    "b -  b&-    -        b",
    "b -  -&-  -   O -&- @b",
    "bOM    A M  -&- -&- bb",
    "b    - b     -   -   b",
    "b -&-    -&- M M  M  b",
    "b-&-  O      A -&-   b",
    "b   -&-    O b     - b",
    "b-&-   -&-   A   -   b",
    "b    M    -  b  O    b",
    "b  O  A   -&-     -&-b",
    "b     b M      O     b",
    "b -&-   - A  -&-  M -b",
    "b A   O - b     O M  b",
    "bOb  -     -&- -M    b",
    "b   -&- A         -  b",
    "b    O  b -&-    -   b",
    "bMMMMMMMMMMMMMMMMMMMPb",
    "bXXXXXXXXXXXXXXXXXXXb",
  ],
  [
    "                    ",
    "                    ",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "                                            b",
    "                                        A? bb",
    "                                        bbbbb",
    "    %                ",
    "          %       %   ",
    "      %       %       ",
    "                    ",
    "   &  &      &                  ",
    "        &  O       & M    O  ",
    "  &           &           M O  ",
    "O% &  M    &      M%   M       ",
    "         M       O       &  M O ",
    " &    O      O    &   &     b   ",
    "M        &     &   O            ",
    "      O     M       A      A    ",
    "    &   & &    M  --------------",
    " O &   M     &   --#############",
    "       &  O     --##########EE######",
    " & O          --############EE#######",
    "      M   ---#########################",
    "O &    --########################- -#",
    " M   --#######################@  ",
    "    --########################--  -  - A",
    "  --#############################-##-##b",
    "P-#####################################",
    "M###########################################",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
];