import random
import math

colours = ['red', 'tangerine', 'green', 'turquoise', 'cyan', 'blue', 'lilac', 'khaki', 'purple',
           'pink', 'burgundy', 'grey', 'golden', 'yellow', 'brown', 'black', 'rainbow-coloured', 'black-and-white']

creatures = ['wombat', 'platypus', 'cabybara', 'axolotl', 'quokka',
             'octopus', 'starfish', 'seahorse', 'moose', 'deer', 'sparrow', 'eagle', 'lizard', 'humming bird', 'antelope', 'unicorn']

verbs_aux_w_ing = ['loves', 'likes', 'dislikes', 'hates',
                   'enjoys', 'feels like', 'does not feel like', 'dreams of']

verbs_aux_w_inf = ['loves to', 'likes to', 'does not like to', 'hates to', 'wants to', 'does not want to', 'wishes to', 'does not wish to',
                   'hopes to', 'plans to', 'would like to', 'would love to', 'will', 'would', 'will not', 'would not', 'should', 'dares not', 'learns to', 'can', 'cannot', 'may', 'may not']

verbs_intr_inf = ['run', 'escape', 'wander',
                  'think', 'lie', 'walk', 'stroll', 'play', 'code', 'imagine', 'argue', 'fly', 'travel']
verbs_tr_inf = ['eat', 'drink', 'have', 'buy', 'sell', 'play with', 'use', 'waste', 'destroy', 'improve','make', 'impress', 'touch','cheat','distort', 'create', 'get', 'give', 'send', 'show', 'borrow', 'grow', 'receive', 'ask for', 'fetch']

verbs_intr_ing = ['playing', 'running', 'escaping', 'wandering', 'thinking', 'lying', 'walking',
                  'storlling', 'singing', 'writing', 'drawing', 'coding', 'imagining', 'arguing', 'flying to', 'travelling to']
verbs_tr_ing = ['eating', 'drinking', 'buying', 'selling', 'playing with', 'flying', 'travelling with', 'using', 'wasting', 'destroying', 'improving','making', 'impressing', 'touching','cheating','distorting', 'creating', 'getting', 'giving', 'sending', 'showing', 'borrowing', 'growing', 'receiving', 'asking for', 'fetching']

verbs_intr = ['runs', 'escapes', 'wanders',
              'thinks', 'lies', 'walks', 'strolls', 'plays', 'sings', 'writes', 'draws', 'codes', 'imagines', 'argues', 'flies', 'travels']
verbs_tr = ['eats', 'drinks', 'buys', 'sells', 'plays with', 'flies to', 'travels with', 'uses', 'wastes', 'destroys', 'improves', 'makes', 'impresses', 'touches', 'cheats', 'distorts', 'creates', 'gets', 'gives', 'sends', 'shows', 'borrows', 'grows', 'asks for', 'fetches']

food_drinks = ['oumph', 'quorn', 'spinach', 'fried eggs', 'sausages', 'chorizos','broccolis', 'apple pies', 'sponge cake', 'cookies', 'icecream','vodka', 'iced tea', 'honey', 'earl grey', 'tonic water', 'sparkling water', 'tequila']

objs = ['chairs', 'desks', 'phones', 'bags', 'cups', 'mugs', 'bottles', 'tables', 'hands', 'feet','problems', 'computers', 'flowers', 'grass', 'the truth', 'the reality', 'an oven']

places = ['in the sky', 'on a bench', 'on the moon', 'on the sun', 'on earth', 'on mars', 'on pluto', 'under a tree', 'in the water', 'above a fire', 'between the eyes', 'in the house', 'in the air']

adjs = ['happy', 'sad','clever','naive','smart','cheerful','hungry','drunk','optimistic','pessimistic','imaginative','stubborn', 'stupid', 'thoughtful','inconsiderate','honest','dishonest','ambitious','kind','carefree','evil','creative','boring','brave','annoying', 'crazy', 'mad', 'cynical', 'skeptical', 'genuine', 'cunning', 'destructive']

advs = ['well', 'better', 'soon', 'often', 'less often', 'fast', 'faster', 'happily']

gender_pronouns = [['He', 'he', 'His', 'his'], ['She', 'she', 'Her', 'her']]



def gen_name_part():
    name_part_length = math.floor(random.randrange(2, 4))
    name_part = ' '*name_part_length
    name_part = list(name_part)
    for i in range(name_part_length):
        name_part[i] = chr(math.floor(random.randrange(97, 123)))
    while 'a' not in name_part and 'e' not in name_part and 'i' not in name_part and 'o' not in name_part and 'u' not in name_part:
        name_part[math.floor(random.randrange(len(name_part)))] = chr(
            math.floor(random.randrange(97, 123)))
    name_part = ''.join(name_part)
    # print('name_part', name_part)
    return name_part


def gen_name():
    name_parts = []
    for i in range(random.randrange(2, 4)):
        name_parts.append(gen_name_part())
    name = ''.join(name_parts)
    name = list(name)
    name[0] = name[0].upper()
    name = ''.join(name)
    return name


def gen_gender():
    ran_num = random.randrange(2)
    return gender_pronouns[ran_num]


def gen_general(word_list):
    return word_list[math.floor(random.randrange(len(word_list)))]


name = gen_name()
pronouns = gen_gender()
colour = gen_general(colours)
creature = gen_general(creatures)
print('Far, far away lives a {} {}. {} name is {}.'.format(
    colour, creature, pronouns[2], name))

verb = gen_general(verbs_tr)
obj = gen_general(objs)
print('Every day {} {} {}.'.format(pronouns[1], verb, obj))

adj1 = gen_general(adjs)
adj2 = gen_general(adjs)
print('{} friends are neither {} nor {}.'.format(pronouns[2], adj1, adj2))

verb1 = gen_general(
    verbs_aux_w_ing)
verb2 = gen_general(
    verbs_tr_ing)
obj = gen_general(food_drinks)
verb3 = gen_general(
    verbs_aux_w_inf)
verb4 = gen_general(
    verbs_intr_inf)
adv = gen_general(advs)
print('{} {} {} {} very much and {} {} {}.'.format(
    pronouns[0], verb1, verb2, obj, verb3, verb4, adv))


verb1 = gen_general(verbs_aux_w_inf)
verb2 = gen_general(verbs_tr_inf)
obj = gen_general(objs)
place = gen_general(places)
print('{} {} always {} {} {}.'.format(pronouns[0],verb1, verb2, obj, place))

obj1 = gen_general(objs)
obj2 = gen_general(food_drinks)
verb = gen_general(verbs_tr_inf)
print('{} motto is \'{} are just like {}. Just {} them.\''.format(pronouns[2],obj1, obj2, verb))

adj1 = gen_general(adjs)
adj2 = gen_general(adjs)
print('{} is {} and {}.'.format(name, adj1, adj2))
print('Be like {}.'.format(name))
